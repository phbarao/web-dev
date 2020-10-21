$(function () {
    $('.menu-toogle, .fa-times').on('click', function () {
        $('nav').toogleClass('active');
        $('.overlay').toogleClass('menu-open');
    });
    
    $('.overlay').on('click', function () {
        $('nav').removeClass('active');
        $(this).removeClass('menu-open');
    });
});