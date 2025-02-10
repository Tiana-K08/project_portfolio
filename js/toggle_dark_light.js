const buttonDarkLight = document.querySelector('.toggle-btn');
const bodyPages = document.querySelector('body');
const bgHomepage = document.querySelector('.homepage-wrapper');
const nameShadow = document.querySelector('#name-shadow');

buttonDarkLight.onclick = function() {
    buttonDarkLight.classList.toggle('toggle-btn--active');
    bodyPages.classList.toggle('light-mode');
    bgHomepage.classList.toggle('bg-img-light-mode');
    nameShadow.classList.toggle('shadow-text-light-mode');
}