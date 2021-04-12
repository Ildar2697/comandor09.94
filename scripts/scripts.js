ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [54.731531, 55.955309],
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

  const Slider1 = new Swiper('.swiper-container-hero2', {
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


  const Slider2 = new Swiper('.sliders1-container', {
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
    if (scroll < 400) {
      upBtn.style.display = 'none';
    } else {
      upBtn.style.display = 'block';
    }
  })


  let slidersSlider1 = document.querySelector('.sliders1-container-1');
  let slidersSlider2 = document.querySelector('.sliders1-container-2');
  let slidersSelectOption1 = document.querySelector('.sliders__options-1');
  let slidersSelectOption2 = document.querySelector('.sliders__options-2');


  slidersSlider2.style.display = 'none';

  function selectSlider(slider, sliderHide, optionHide, optionShow) {
      slider.style.display = 'block';
      sliderHide.style.display = 'none';
      optionHide.classList.remove('sliders__option-active');
      optionShow.classList.add('sliders__option-active');
  }

  slidersSelectOption1.addEventListener('click', function() {
      selectSlider(slidersSlider1, slidersSlider2, slidersSelectOption2, slidersSelectOption1);
  });
  slidersSelectOption2.addEventListener('click', function() {
      selectSlider(slidersSlider2, slidersSlider1, slidersSelectOption1, slidersSelectOption2);
  });
// })


  let headerList = document.querySelector('.header__list');
  headerList.addEventListener('click', function(event) {
    if (event.target.classList.contains('header__item-link')) {
      event.preventDefault()
      window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      })
  }});


  let headerBurger = document.querySelector('.header__burger');
  let menu = document.querySelector('.menu');
  let menuCloseBtn = document.querySelector('.menu__close-btn');

  headerBurger.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
  });
  menuCloseBtn.addEventListener('click', function() {
    menu.classList.remove('menu-active');
  });

  let menuList = document.querySelector('.menu__list');
  let menuItemLink = document.querySelectorAll('.menu__item-link');
  let menuExpandedTitle = document.querySelector('.menu__expanded-title');

  menuItemLink.forEach(function(el) {
    el.addEventListener('click', function() {
      menuList.style.display = 'none';
      document.querySelector(this.hash).style.display = 'block';
      menuExpandedTitle.innerHTML = this.innerHTML;
      console.log(this.hash)
      console.log(this.innerHTML);
    })
  })
