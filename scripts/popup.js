let popupWrapper = document.querySelector('.popup__wrapper');
let popupTitle = document.querySelector('.popup__title');
// let theme


function showPopup(title, theme) {
    console.log(theme);
    popupTitle.innerHTML = title;
    document.querySelector('body').classList.add('body-lock');
    popupWrapper.classList.add('popup__wrapper-active');
    document.querySelector('.popup__form-name').innerHTML = '';
    document.querySelector('.popup__form-tel').innerHTML = '';

};
function closePopup() {
    popupWrapper.classList.remove('popup__wrapper-active');
    body.classList.remove('body-lock');
};
function checkInputs() {
    let err = 0;
    let name = document.querySelector('.popup__form-name');
    let tel = document.querySelector('.popup__form-tel');
    let theme = document.querySelector('.popup__title').innerHTML;
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
    if (err == 0) {
            let method = 'POST';
            let url = '../ajax/fos_popup.php'
            let xhttp = new XMLHttpRequest();

            let data = 'name=' + nameValue + '&phone' + telValue + '&theme' + theme;
            console.log(data)
            tel.value = '';
            name.value = '';
        //     xhttp.open(method, url);
        //     xhttp.onreadystatechange = function() {
        //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        //         console.log(data);
        //         console.log(theme)
        //     } else {
        //         console.log('error')
        //     };
        // }
        // xhttp.send(data)
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