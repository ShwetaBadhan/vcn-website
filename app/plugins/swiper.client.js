import Swiper from "swiper";
import "swiper/css";

export default defineNuxtPlugin(() => {
  // wait till DOM + route mounted
  setTimeout(() => {
    const el = document.querySelector(".nutrient-swiper");
    if (!el) return;

    new Swiper(".nutrient-swiper", {
      slidesPerView: 1.2,
      spaceBetween: 20,

      breakpoints: {
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, 300);
});
