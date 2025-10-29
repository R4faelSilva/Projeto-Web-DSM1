const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

const swiper = new Swiper('.slider-container', {
  effect: 'slide',
  loop: true,
  speed: 1300,

  navigation: {
    nextEl: '#avanco',
    prevEl: '#voltar',
  },

});

sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index);
    updatePagination(tab, index);
  });
});

