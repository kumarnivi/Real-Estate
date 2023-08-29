SmoothScroll({
    animationTime: 800, // [ms]
    stepSize: 100, // [px]
    accelerationDelta: 50, // 50
    accelerationMax: 3, // 3
    touchpadSupport: false,
  });
  
  $(document).ready(function () {
    // block scroll
    var clicked = true;
    $(
      ".header__menu-button, #button__log-in, #button__sign-up, .popup__overlay"
    ).click(function () {
      if (clicked == true) {
        $("body").css("overflow", "hidden");
        clicked = false;
      } else {
        $("body").css("overflow", "visible");
        clicked = true;
      }
    });
    // when click on overlay > click to menu button
    $(".header__menu-overlay").click(function () {
      $(".header__menu-button").click();
    });
    // footer form label
    $(".footer__radio-container").click(function () {
      $(".footer__radio-container").removeClass("is--active");
      $(this).addClass("is--active");
    });
    // click on load
    $(".footer__radio-container").eq(0).addClass("is--active");
    // on click scroll to top
    $(".gotop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  });
  
  // animate bg links in header nav
  $(() => {
    $("a.dropdown__item.mod--header").hover(
      function () {
        let bg = $(this).siblings(".dropdown__item.mod--header.mod--bg");
        let dist = $(this).position().top;
        $(bg).css({
          top: dist,
          opacity: "1",
        });
      },
      function () {
        let bg = $(this).siblings(".dropdown__item.mod--header.mod--bg");
        $(bg).css("opacity", "0");
      }
    );
  });
  
  // color dropdown-btn when hover
  $(".dropdown.mod--header").hover(
    function () {
      $(".dropdown.mod--header")
        .not(this)
        .find(".dropdown-btn.mod--header")
        .css("color", "#83899D");
    },
    function () {
      $(".dropdown.mod--header")
        .find(".dropdown-btn.mod--header")
        .css("color", "#07133B");
    }
  );
  
  
  
  
  
        var swiper = new Swiper("[data-swiper=testimonial]", {
          speed: 500,
          loop: false,
          autoHeight: false,
          grabCursor: true,
          roundLengths: true,
          resizeObserver: true,
          spaceBetween: 8,
  
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          },
          navigation: {
            nextEl: "[data-swiper=next-testimonial]",
            prevEl: "[data-swiper=prev-testimonial]",
          },
        });
  
        let screenSize = $(window).width();
        if (screenSize < 768) {
          var swiper2 = new Swiper("[data-swiper=opportunity]", {
            slidesPerView: "auto",
            loop: false,
            roundLengths: true,
          });
          var swiper3 = new Swiper("[data-swiper=properties]", {
            slidesPerView: "auto",
            loop: false,
            slidePerViews: 2,
            roundLengths: true,
          });
        }
  
        $(function () {
          // accordion
          function dropdowns(e) {
            if (!$(".accordion").eq(e).hasClass("is--active")) {
              $(".accordion").removeClass("is--active");
              $(".accordion").eq(e).addClass("is--active");
            }
  
            let startImages = $(".start__img-container > .start__img");
            if (e == 0) {
              startImages.removeClass("is--active");
              startImages.eq(e).addClass("is--active");
            } else if (e == 1) {
              startImages.removeClass("is--active");
              startImages.eq(e).addClass("is--active");
            } else if (e == 2) {
              startImages.removeClass("is--active");
              startImages.eq(e).addClass("is--active");
            } else {
              startImages.removeClass("is--active");
              startImages.eq(e).addClass("is--active");
            }
          }
          dropdowns(0);
  
          if (screenSize > 768) {
            let t;
            timer = {
              start: function (time) {
                t = setInterval(function () {
                  let elem = $(".accordion.is--active"),
                    index = $(".accordion").index(elem);
                  if (index < 3) {
                    index++;
                  } else {
                    index = 0;
                  }
                  dropdowns(index);
                }, time);
              },
              stop: function () {
                clearInterval(t);
              },
            };
            timer.start(5000);
          }
  
          $(".accordion").on("click", function () {
            let i = $(this).index();
            dropdowns(i);
            if (screenSize > 768) {
              timer.stop();
              timer.start(5000);
            }
          });
        });
  
        // counter
        new PureCounter({
          selector: "#prediction-rate", // HTML query selector for spesific element
          start: 0, // Starting number [unit]
          end: 40, // End number [unit]
          duration: 4, // The time in seconds for the animation to complete [seconds]
          delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
          once: true, // Counting at once or recount when the element in view [boolean]
          repeat: false, // Repeat count for certain time [boolean:false|seconds]
          decimals: 0, // How many decimal places to show. [unit]
          legacy: true, // If this is true it will use the scroll event listener on browsers
        });
  
        new PureCounter({
          selector: "#property-value", // HTML query selector for spesific element
          start: 0, // Starting number [unit]
          end: 77, // End number [unit]
          duration: 4, // The time in seconds for the animation to complete [seconds]
          delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
          once: true, // Counting at once or recount when the element in view [boolean]
          repeat: false, // Repeat count for certain time [boolean:false|seconds]
          decimals: 0, // How many decimal places to show. [unit]
          legacy: true, // If this is true it will use the scroll event listener on browser
        });
  
        new PureCounter({
          selector: "#agent",
          start: 0, // Starting number [unit]
          end: 77, // End number [unit]
          duration: 4, // The time in seconds for the animation to complete [seconds]
          delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
          once: true, // Counting at once or recount when the element in view [boolean]
          repeat: false, // Repeat count for certain time [boolean:false|seconds]
          decimals: 0, // How many decimal places to show. [unit]
          legacy: true, // If this is true it will use the scroll event listener on browsers
        });
  
        $(() => {
          $("a.approach__tabs-link").hover(
            function () {
              let bg = $(".approcah__tabs-hover");
              let dist = $(this).position().left;
              $(bg).css("left", dist);
            },
            function () {}
          );
        });
      
  
  
        !(function (o, c) {
          var n = c.documentElement,
            t = " w-mod-";
          (n.className += t + "js"),
            ("ontouchstart" in o ||
              (o.DocumentTouch && c instanceof DocumentTouch)) &&
              (n.className += t + "touch");
        })(window, document);
  
  
        WebFont.load({
          google: {
            families: ["Hind:300,regular,500,600,700", "Poppins:regular,500,600"],
          },
        });