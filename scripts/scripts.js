// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
}
const defaultSelect = () => {
    const element = document.querySelector('.callback__select');
    const choices = new Choices(element, {
      searchEnabled: false,
    });
  
};
defaultSelect();

let callbackInputTel = document.querySelector('.callback__form-tel');
let inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(callbackInputTel);

const swiperHero1 = new Swiper('.swiper-container-hero1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-hero1',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-hero1',
      prevEl: '.swiper-button-prev-hero1',
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar-hero1',
    // },
  });
  let upBtn = document.querySelector('.up-btn');
  upBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', function(event) {
    let scroll = this.scrollY;
    if (scroll < 400) {
      upBtn.style.display = 'none';
    } else {
      upBtn.style.display = 'block';
    }
  })


  let headerList = document.querySelector('.header__list');

  headerList.addEventListener('click', function(event) {
    if (event.target.classList.contains('header__item-link')) {
      event.preventDefault()
      window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      })
  }})
