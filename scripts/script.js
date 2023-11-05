
$(document).ready(function() {
    $(".menu-btn").click(function() {
        $(".lista-nav").slideToggle();
    });


    $(".link-menu").on("mouseenter", function() {
        $(this).css("background-color", "#ed8634");
    });

    $(".nav-link").on("mouseleave", function() {
        $(this).css("background-color", "#114380");
    });

});
