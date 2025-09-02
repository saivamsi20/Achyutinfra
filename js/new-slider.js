document.addEventListener("DOMContentLoaded", function () {
  // Initialize main Swiper
  var mainSwiper = new Swiper(".main-swiper", {
    slidesPerView: "auto",
    spaceBetween: 20, // This creates space between the main slides
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  // Initialize all nested Swipers
  var nestedSwipers = document.querySelectorAll(".nested-swiper");
  nestedSwipers.forEach(function (swiperElement) {
    new Swiper(swiperElement, {
      loop: true,
      effect: "fade", // Use fade effect for smooth transition
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // Since there are no visible nav/pagination for nested, these can be removed
      // But they are kept here in case you want to add them back later
      navigation: {
        nextEl: swiperElement.querySelector(".swiper-button-next"),
        prevEl: swiperElement.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperElement.querySelector(".swiper-pagination"),
        clickable: true,
      },
      nested: true, // Important for nested sliders
    });
  });
});
