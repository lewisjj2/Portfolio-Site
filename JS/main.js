//Pop Out Navigation
$(document).ready(function(){
            $(".toggle-menu").click(function(){
                $(".sidebar-menu").toggleClass("toggle-open");
            });
        });


// Close Mobile Menu On Click
        $(document).ready(function() {
            $(".nav-item,.contact-btn,.home-btn").on("click touch", function(){
                $(".toggle-menu").click();
            });
        });

//Typewriter Effect
    document.addEventListener('DOMContentLoaded', function(){
      Typed.new(".header-title", {
        strings: ["Welcome, I'm Jon"],
        typeSpeed: 75
      });
  });

//Add Smooth Scroll
$(document).ready(function () {

    'use strict';

    $('.nav-item,.home-btn,.contact-btn').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});


