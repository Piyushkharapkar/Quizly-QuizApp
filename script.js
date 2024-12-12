// Toggle the visibility of the menu on mobile devices
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});
