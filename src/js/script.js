$(function () {
    let $burgerBtn = $('.burger-btn');
    let $headerMenu = $('.main-menu');
    let closeMenuBtn = $('.close-main-menu');

    $burgerBtn.bind('click', function (e) {
        e.preventDefault();
        $headerMenu.addClass('show-menu');
    });
    closeMenuBtn.bind('click', function (e) {
        e.preventDefault();
        $headerMenu.removeClass('show-menu');
    });

    $('.car__sl').slick({
        centerMode: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true, 
        appendDots: $('.dots-baza'),
        prevArrow: '.my_slick-arr__prev',
        nextArrow: '.my_slick-arr__next',
        responsive: [
             {
              breakpoint: 999,
             settings: {
                 slidesToShow: 2,
             }
            },
            {
              breakpoint: 650,
             settings: {
                 slidesToShow: 1,
             }
            }
         ],
    });
    
 

});
