const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardMobile = document.querySelector('.cardMobile');

document.addEventListener('click', (e) => {
    const element = e.target;

    if (element === openMenu) mobileMenu.classList.toggle('hamburguerActive');

    if (element === closeMenu) mobileMenu.classList.toggle('hamburguerActive');

    if (element.classList.contains('cardMobile')) mobileMenu.classList.toggle('hamburguerActive');
});
