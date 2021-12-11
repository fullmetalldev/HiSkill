$(document).ready(function() {
    $('.header__navrow__burger-menu').click(function(event){
        // $('.burger_menu').removeClass('not-active');
        // $('.burger_menu').toggleClass('active');
        // $('.header__navrow__burger-menu').toggleClass('opacity');
        $('.burger_menu').fadeToggle()
        $('.burger_menu').css("display", "flex")
    });
    $('.close').click(function(event){
        // $('.burger_menu').toggleClass('not-active');
        // $('.burger_menu').removeClass('active');
        // $('.header__navrow__burger-menu').removeClass('opacity');
        $('.burger_menu').fadeToggle()
    });
});

$(document).ready(function() {
    $('#home').click(function(event){
        $('#home').toggleClass('on-click');
        $('#courses').removeClass('on-click');
        $('.main').toggleClass('page-on');
        $('.main2').removeClass('page-on');
    });
    $('#courses').click(function(event){
        $('#courses').toggleClass('on-click');
        $('#home').removeClass('on-click');
        $('.main2a').toggleClass('page-on');
        $('.main').removeClass('page-on');
    });

});

$(document).ready(function() {
    $('.search_button').click(function(event){
        let a = document.querySelector('.form-search').value;
        alert(a)
    });
});