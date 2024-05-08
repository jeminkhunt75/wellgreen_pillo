$(document).ready(function() {
  var navToggle = $(".toggle-menu");
  var navWrapper = $(".nav__wrapper");

  navToggle.on("click", function() {
    if (navWrapper.hasClass("active")) {
      $(this).attr("aria-expanded", "false").attr("aria-label", "menu").removeClass("active");
      navWrapper.removeClass("active");
    } else {
      navWrapper.addClass("active");
      $(this).attr("aria-label", "close menu").attr("aria-expanded", "true").addClass("active");
    }
  });

  // slider
  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel)
});