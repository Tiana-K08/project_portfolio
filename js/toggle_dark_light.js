const buttonDarkLight = document.querySelector('.toggle-btn');
const bodyPages = document.querySelector('body');
const bgHomepage = document.querySelector('.homepage-wrapper');
const nameShadow = document.querySelector('#name-shadow');

function activeLightMode() {
    if (buttonDarkLight) {
        buttonDarkLight.classList.add('toggle-btn--active');
    }
    if (bodyPages) {
        bodyPages.classList.add('light-mode');
    }
    if (bgHomepage) {
        bgHomepage.classList.add('bg-img-light-mode');
    }
    if (nameShadow) {
        nameShadow.classList.add('shadow-text-light-mode');
    }
}

function activeDarkMode() {
    if (buttonDarkLight) {
        buttonDarkLight.classList.remove('toggle-btn--active');
    }
    if (bodyPages) {
        bodyPages.classList.remove('light-mode');
    }
    if (bgHomepage) {
        bgHomepage.classList.remove('bg-img-light-mode');
    }
    if (nameShadow) {
        nameShadow.classList.remove('shadow-text-light-mode');
    }
} 

buttonDarkLight.onclick = function() {
    buttonDarkLight.classList.toggle('toggle-btn--active');
    const isLightMode = buttonDarkLight.classList.contains('toggle-btn--active');
    if (isLightMode) {
        activeLightMode();
        localStorage.setItem('mode', 'light');
    } else {
        activeDarkMode();
        localStorage.setItem('mode', 'dark');
    }
}  

document.addEventListener("DOMContentLoaded", function() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        activeLightMode();
    } else {
        activeDarkMode();
    }
});