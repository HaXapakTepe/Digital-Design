(function () {
  'use strict';

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('arrow-up__show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('arrow-up__show');
    }
  }

  const goTopBtn = document.querySelector('.arrow-up');

  window.addEventListener('scroll', trackScroll);
})();

const date = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

alert(date.toLocaleString("ru", options)); 
