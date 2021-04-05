$(document).ready(function() {
        // Quote
        $('.quote').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        });
    
        // Quote
        $('.quote2').slick({
            arrows: false,
            autoplay: false,
            dots: true
        });
    
        // Quote
        $('.quote3').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
})