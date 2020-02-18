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

    $('.progress-content .skill-progress').each(function() {
        var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
                var value = $(this.element).attr('data-progress');
                $(this.element).css('width', ''+value+'%');
            },
            offset: '70%'
          })
    });

    var $grid = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
    });

    $('.filter li').on('click', function() {
        $('.filter li').removeClass('filter-active');

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
        $(this).addClass('filter-active');
    });

     // Get the modal
     var modal1 = document.getElementById("myModal1");
     var modal2 = document.getElementById("myModal2");
     var modal3 = document.getElementById("myModal3");
     // Get the button that opens the modal
     var btn1 = document.getElementById("myBtn1");
     var btn2 = document.getElementById("myBtn2");
     var btn3 = document.getElementById("myBtn3");
 
     // Get the <span> element that closes the modal
     var span1 = document.getElementsByClassName("close")[0];
     var span2 = document.getElementsByClassName("close2")[0];
     var span3 = document.getElementsByClassName("close3")[0];
 
     // When the user clicks on the button, open the modal
     btn1.onclick = function() {
         modal1.style.display = "block";
     }
 
     btn2.onclick = function() {
         modal2.style.display = "block";
     }
 
     btn3.onclick = function() {
         modal3.style.display = "block";
     }
 
     // When the user clicks on <span> (x), close the modal
     span1.onclick = function() {
         modal1.style.display = "none";
     }
 
     span2.onclick = function() {
         modal2.style.display = "none";
     }
 
     span3.onclick = function() {
         modal3.style.display = "none";
     }
 
     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal1) {
             modal1.style.display = "none";
         }
     }
 
     window.onclick = function(event) {
         if (event.target == modal2) {
             modal2.style.display = "none";
         }
     }
 
     window.onclick = function(event) {
         if (event.target == modal3) {
             modal3.style.display = "none";
         }
     }
   
})