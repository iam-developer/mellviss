// Бургер меню:
let menu = document.querySelector('.fixed--menu');
let closeBtn = document.querySelector('.close--menu');
let openBtn = document.querySelector('.burger--menu');

openBtn.onclick = function() {
    menu.classList.add('active');
}
closeBtn.onclick = function() {
    menu.classList.remove('active');
}