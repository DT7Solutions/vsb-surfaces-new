// Custom JavaScript for Quartz & Granite Slider-area
const quartzSwiper = new Swiper('.quartz-swiper', {
   loop: true,
   effect: 'fade',
   fadeEffect: { crossFade: true },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false
   }
});
const graniteSwiper = new Swiper('.granite-swiper', {
   loop: true,
   effect: 'fade',
   fadeEffect: { crossFade: true },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false
   }
});

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




 document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form refresh

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const product = document.getElementById('product').value;
    const message = document.getElementById('message').value.trim();

    // You can send this data via AJAX, store in DB, or use FormSubmit API
    console.log({ name, phone, email, product, message });

    alert('Quote request submitted successfully!');
    document.getElementById('quoteForm').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('getQuoteModal'));
    modal.hide();
  });