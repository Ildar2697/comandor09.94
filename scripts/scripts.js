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
        center: [54.731531, 55.955309],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 11
    });
    var myPlacemark1 = new ymaps.Placemark([54.717438, 55.954065], {}, {
      iconLayout: 'default#image',
    });
    var myPlacemark2 = new ymaps.Placemark([54.711775, 55.985632], {}, {
      iconLayout: 'default#image',
    });
    var myPlacemark3 = new ymaps.Placemark([54.781316, 56.032820], {}, {
      iconLayout: 'default#image',
    });
    var myPlacemark4 = new ymaps.Placemark([54.760683, 56.030889], {}, {
      iconLayout: 'default#image',
    });
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
  
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

// const swiperHero1 = new Swiper('.swiper-container-hero1', {
//     direction: 'horizontal',
//     loop: false,
  
//     pagination: {
//       el: '.swiper-pagination-hero1',
//     },
  
//     navigation: {
//       nextEl: '.swiper-button-next-hero1',
//       prevEl: '.swiper-button-prev-hero1',
//     },
//   });

const swiperHero2 = new Swiper('.swiper-container-hero2', {
    direction: 'horizontal',
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
    // console.log(scroll)
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
