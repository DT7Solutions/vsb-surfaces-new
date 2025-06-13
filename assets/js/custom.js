// Custom JavaScript for Tabs Products Slider
function initTabAutoSlider(sectionId) {
  const section = document.querySelector(sectionId);
  if (!section) return;

  const tabButtons = section.querySelectorAll(".nav-link");
  const tabPanes = section.querySelectorAll(".tab-pane");

  let currentIndex = 0;
  let intervalId;

  const switchTab = (index) => {
    // Remove active from all buttons and panes
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabPanes.forEach(pane => pane.classList.remove("show", "active"));

    // Add active to current
    tabButtons[index].classList.add("active");
    tabPanes[index].classList.add("show", "active");
  };

  const startAutoSlide = () => {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabButtons.length;
      switchTab(currentIndex);
    }, 3000);
  };

  const stopAutoSlide = () => clearInterval(intervalId);

  // Manual click syncing (in case user clicks thumbnail)
  tabButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      currentIndex = idx;
      switchTab(currentIndex);
    });
  });

  // Init
  startAutoSlide();
  section.addEventListener("mouseenter", stopAutoSlide);
  section.addEventListener("mouseleave", startAutoSlide);
}

document.addEventListener("DOMContentLoaded", function () {
  initTabAutoSlider("#quartz-slider");
  initTabAutoSlider("#granite-slider");
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
