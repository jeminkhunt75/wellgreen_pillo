function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
          /* Make an HTTP request using the attribute value as the file name: */
          file = "/wellgreen_pillo/" + file;
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4) {
                  if (this.status == 200) {
                      elmnt.innerHTML = this.responseText;
                  }
                  if (this.status == 404) {
                      elmnt.innerHTML = "Page not found.";
                  }
                  /* Remove the attribute, and call this function once more: */
                  elmnt.removeAttribute("include-html");
                  includeHTML();
              }
          };
          xhttp.open("GET", file, true);
          xhttp.send();
          /* Exit the function: */
          return;
      }
  }
}
includeHTML();

  var navToggle = $(".toggle-menu");
  var navWrapper = $(".nav__wrapper");

  $(document).on("click", ".toggle-menu", function() {
    if ($(".nav__wrapper").hasClass("active")) {
      $(this).attr("aria-expanded", "false").attr("aria-label", "menu").removeClass("active");
      $(".nav__wrapper").removeClass("active");
    } else {
      $(".nav__wrapper").addClass("active");
      $(this).attr("aria-label", "close menu").attr("aria-expanded", "true").addClass("active");
    }
  });

   

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = {
        "loop": true,
        "speed": 600,
        "autoplay": {
          "delay": 5000
        },
        "slidesPerView": "auto",
        "pagination": {
          "el": ".swiper-pagination",
          "type": "bullets",
          "clickable": true
        },
        "breakpoints": {
          "320": {
            "slidesPerView": 2,
            "spaceBetween": 40
          },
          "480": {
            "slidesPerView": 3,
            "spaceBetween": 60
          },
          "640": {
            "slidesPerView": 4,
            "spaceBetween": 80
          },
          "992": {
            "slidesPerView": 5,
            "spaceBetween": 120
          },
          "1200": {
            "slidesPerView": 6,
            "spaceBetween": 120
          }
        }
      };
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);
  