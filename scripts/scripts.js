// COPYRIGHT
window.onload = function () {
    document.getElementById("copyright").innerHTML = "All Rights Reserved. Copyright © " + new Date().getFullYear();
}

// SCROLL
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
     }, 500);
});

// MENU
$(document).ready(function () {
    $(".menu-button").on("click tap", function () {
        $(".menu-button").toggleClass("menu-active");
        $(".menu").toggleClass("opaic");
    });
    $("#menu-list li a").on("click tap", function () {
        $(".menu-button").toggleClass("menu-active");
        $(".menu").toggleClass("opaic");
    })
});