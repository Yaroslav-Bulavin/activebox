
// $(document).ready(function () {
//
//     // burger
//     $("#burger").on("click", function (event) {
//         event.preventDefault();
//         $(this).toggleClass("active");
//         $("#nav").toggleClass("active");
//         $(".header").toggleClass("active");
//     });
//     $(".nav_link").on("click", function(){
//         $("#nav").toggleClass("active");
//         $(".header").toggleClass("active");
//         $("#burger").toggleClass("active");
//     });
//
// });

document.addEventListener("DOMContentLoaded", function () {

    var header = document.getElementById("header"),
        introH = document.getElementById("intro").offsetHeight,
        scrollOffset = window.pageYOffset;
console.log(scrollOffset);

    checkScroll(scrollOffset);

    window.addEventListener("scroll", function(){
        scrollOffset = this.pageYOffset;
        checkScroll(scrollOffset);
    });

    // header-fixed

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.classList.add("fixed");
        }
        else {
            header.classList.remove("fixed");
        }
    }

// Smooth scroll
    const anchors = document.querySelectorAll('a[data-scroll*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('data-scroll').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    // Burger

    document.querySelector("#burger").addEventListener("click", function (e) {
       e.preventDefault();
       if (this.classList.contains("active")){
           this.classList.remove("active");
           document.querySelector("#nav").classList.remove("active");
           document.querySelector(".header").classList.remove("active");
       }
       else {
           this.classList.add("active");
           document.querySelector("#nav").classList.add("active");
           document.querySelector(".header").classList.add("active");
       }

    });

        var items = document.querySelectorAll(".nav_link");
        var itemHandler = function () {

            if (document.getElementById("nav").classList.contains("active") && document.getElementById("burger").classList.contains("active")) {

                document.getElementById("nav").classList.remove("active");
                document.getElementById("burger").classList.remove("active");
                document.querySelector(".header").classList.remove("active");
            }
            else {
                document.getElementById("nav").classList.add("active");
                document.getElementById("burger").classList.add("active");
                document.querySelector(".header").classList.add("active");
            }

        };
        for (i = 0; i < items.length; i++) {
            items[i].addEventListener("click", itemHandler);
        }


});





