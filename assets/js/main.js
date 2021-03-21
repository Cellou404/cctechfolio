$(document).ready(function(){

    /* Menu */
    $(".fa-bars").on('click', function(){
        $("#sidebar").css("height","320px");
        $(".menu").css("display","block");
        $(".fa-bars").css("display","none");
        $(".fa-times").css("display","block");
    });
    $(".fa-times").on('click', function(){
        $("#sidebar").css("height","60px");
        $(".menu").css("display","none");
        $(".fa-bars").css("display","block");
        $(".fa-times").css("display","none");
    });

    if (screen.width <= 1023 ) {
        $(".menu a").on('click', function () {
            $("#sidebar").css("height","60px");
            $(".menu").css("display","none");
            $(".fa-bars").css("display","block");
            $(".fa-times").css("display","none");
        });
    }

    /* End Menu */


    /* Skil Progres */
    $(window).on('scroll', function () {
        $(".skill-item-progress .progres").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
    /* End Skil Progres */


    /* Work */
    $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");

    });



    $('.filter-button').on('click', function(){
        $('.filter-button').removeClass('filter-data');
        $(this).addClass('filter-data');
    });
    /* End Work */


    /* Slider Testimonials */
    var testimonials = $(".testimoni-box");
    testimonials.owlCarousel({
        items: 4,
        margin: 10,
        dots: true,
        autoplay: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {items: 1}, 
            500: {items: 1}, 
            1000: {items: 1}, 
            1200: {items: 1}
            }
    });
    /* End Slider Testimonials */


    /* Scroll To Top */
    var win = $(window),
        navbar = $('.navbar'),
        scrollUp = $(".scroll-up");

    win.on('scroll', function () {
        if ($(this).scrollTop() >= 600) {
            scrollUp.show(300);
        } else {
            scrollUp.hide(300);
        }
    });

        // Back To 0 Scroll Top body
        scrollUp.on('click', function () {
            $("html, body").animate({ scrollTop: 0}, 1000);
        });
    /* End Scroll To Top */

});