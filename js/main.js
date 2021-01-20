
// Форма обратной связи. Чекбокс:
$(document).ready(function() {
    $('.galochka--ramka').on('click', function() {
        $(this).find('.check--img').toggleClass('selected')
    });

// Страница "Оформление заказа"
    // $('.oformit--btn').on('click', function() {
        $(".oformit--btn").click(function() {
            var $emptyFields = $('.oform--input').filter(function() {
                return $.trim(this.value) === "";
            });
        
            if (!$emptyFields.length) {
                $('.oformlenie--bloock').css('display', 'none');
                $('.oform--succes').css('display', 'block');
            }
        });
    // });
});

// Бургер меню:
let menu = document.querySelector('.fixed--menu');
let closeBtn = document.querySelector('.close--menu');
let openBtn = document.querySelector('.burger--menu');

openBtn.onclick = function() {
    menu.classList.add('active');
    closeBtn.classList.add('active');
}
closeBtn.onclick = function() {
    menu.classList.remove('active');
    closeBtn.classList.remove('active');
}
