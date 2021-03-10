$(function () {
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        zIndex: 100,
        variableWidth: true,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: $('.btn__prev'),
        nextArrow: $('.btn__next'),
        centerPadding: '310px',

        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 3
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });
})
