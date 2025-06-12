// Custom JavaScript for Products Slider
const swiperNormal = new Swiper('.project-swiper-normal', {
   loop: true,
   speed: 4000,
   slidesPerView: 'auto',
   spaceBetween: 30,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
   },
   freeMode: true,
   freeModeMomentum: false,
});
const swiperReverse = new Swiper('.project-swiper-reverse', {
   loop: true,
   speed: 4000,
   slidesPerView: 'auto',
   spaceBetween: 30,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true, // REVERSE AUTOPLAY
   },
   freeMode: true,
   freeModeMomentum: false,
});
