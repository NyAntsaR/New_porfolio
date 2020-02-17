var doc = jQuery(document);

doc.ready(function() {
    "use strict";

    var typed = new Typed(".mytext", {
        strings: ["Software Engineer", "Web Developer", "Front End Developer", "Full Stack Developer"],
        smartBackspace: true,
        loop: true,
        typeSpeed: 70,
        backDelay: 1000
    })
})