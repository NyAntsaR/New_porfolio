var doc = jQuery(document);

doc.ready(function() {
    "use strict";

    var typed = new Typed(".mytext", {
        strings: ["Software Engineer", "Web Developer", "Front End Developer", "Full Stack Developer"],
        smartBackspace: true,
        loop: true,
        typeSpeed: 70,
        backDelay: 1000
    });

    

    $(window).scroll(function() {
        var top = $(window).scrollTop();

        if (top>=200){
            $('header').addClass('overlay');
            $('.navbar-nav').removeClass('navbar-nav-bg');
        } else if ($('header').hasClass('overlay')) {
            $('header').removeClass('overlay');
        } else {
            $('.navbar-nav').addClass('navbar-nav-bg');
        }
    });
})