$(document).ready(function(){
	$(".SRC").click(function(){
	  $(".srcform").toggle();
	});
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            loop:false
        }
    }
});
$('.count').countUp({
  'time': 2000,
  'delay': 10
});

});