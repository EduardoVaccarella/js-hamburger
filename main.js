const hamburger = document.querySelector('.hamburger-menu');

const openTrigger = document.querySelector('.header-right > a');

const closeTrigger = document.querySelector('.hamburger-menu .close');

openTrigger.addEventListener('click', function() {

    hamburger.classList.toggle('active')

})

closeTrigger.addEventListener('click', function() {

    hamburger.className = 'hamburger-menu'

})