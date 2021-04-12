let headerList = document.querySelector('.header__list');

headerList.addEventListener('click', function(event) {
    let link = event.target;

    if (link.classList.contains('header__item-link')) {
        event.preventDefault();
        let target = document.querySelector(link.hash);
        window.scrollTo({
            left: 0,
            top: target.offsetTop,
            behavior: 'smooth', 
        })
    }
});

let menu = document.querySelector('.menu');
let menuBackBtn = document.querySelector('.menu__back-btn');
let menuSocials = document.querySelector('.menu__socials');
let menuList = document.querySelector('.menu__list');
let menuExpandedTitle = document.querySelector('.menu__expanded-title');

menuList.addEventListener('click', function(event) {
    let link = event.target;
    console.log(link)
    if (event.target.classList.contains('hidden-menu-item')) {
        event.preventDefault();
        let target = document.querySelector(link.hash);
        window.scrollTo({
            left: 0,
            top: target.offsetTop,
            behavior: 'smooth', 
        });
        menuExpandedTitle.innerHTML = '';
        menuBackBtn.classList.remove('menu__back-btn-active')
        menuSocials.classList.remove('pl100');
        menu.classList.remove('menu-active');
        menuList.style.display = 'block';   
    }
});


console.log(window)