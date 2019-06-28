(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 56){
        $('.navbar').css('background', 'white');
        $('.navbar-brand').css('color', '#39BFBF');
        $('.navbar-links').css('color', '#39BFBF');
    } else{
        $('.navbar').css('background', '#39BFBF');
        $('.navbar-brand').css('color', 'white');
        $('.navbar-links').css('color', 'white');
    }
  });
  

})(jQuery); // End of use strict
