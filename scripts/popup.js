let popupWrapper = document.querySelector('.popup__wrapper');

function showPopup() {
    document.querySelector('body').classList.add('body-lock')
    popupWrapper.classList.add('popup__wrapper-active');
};
function closePopup() {
    popupWrapper.classList.remove('popup__wrapper-active');
    body.classList.remove('body-lock');
};
function checkInputs() {
    let err = 0;
    let name = document.querySelector('.popup__form-name');
    let tel = document.querySelector('.popup__form-tel');
    let nameValue = name.value;
    let telValue = tel.value;
    if (nameValue === '') {
        err = 1;
        name.parentElement.classList.add('input-active');
    } else {
        name.parentElement.classList.remove('input-active');
    }
    if (telValue === '') {
        err = 1;
        tel.parentElement.classList.add('input-active');
    } else {
        tel.parentElement.classList.remove('input-active');
    }
}
let popupContent = document.querySelector('.popup');
let body = document.querySelector('body');
let popupCloseImg = document.querySelector('.popup__close-img');

popupCloseImg.addEventListener('click', function() {
    closePopup();
})
popupWrapper.addEventListener('click', function() {
    closePopup();
});

popupContent.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
});

let popupBtn = document.querySelector('.popup__btn');
popupBtn.addEventListener('click', function() {
    checkInputs();
});