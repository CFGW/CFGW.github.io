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