function userScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-dark");
      navbar.classList.add("text-bg-primary");
    } else {
      navbar.classList.remove("navbar-dark");
      navbar.classList.remove("text-bg-primary");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);

// Swiper
let swiperCards = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },


  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 100,
    },
    1200: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});
