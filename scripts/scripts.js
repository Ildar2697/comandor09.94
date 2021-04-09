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

