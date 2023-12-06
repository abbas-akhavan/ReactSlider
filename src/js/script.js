$(function(){
    $('.owl-carousel').owlCarousel({
        rtl : true,
        margin:3,
        nav:true,
        navText : "",
        dots : false,
        responsive:{
            0:{
                items:7
            },
            600:{
                items:4
            },
            1000:{
                items:7
            }
        }
    })
})
