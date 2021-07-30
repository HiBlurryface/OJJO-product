// burger
$(document).ready(function () {
    $('.burger__icon').click(function (event) {
        $('.burger__menu,.burger__icon').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

// Header
window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 1) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// filters
$(document).ready(function () {
    $('.filters-btn').click(function (event) {
        if ($(event.target).hasClass('active')) {
            $('.filters-choose, .filters-btn').removeClass('active');
        } else {
            $('.filters-choose, .filters-btn').removeClass('active');
            $(event.target).addClass('active');
            $(event.target).parent().find('.filters-choose').addClass('active');
        }
    })
})