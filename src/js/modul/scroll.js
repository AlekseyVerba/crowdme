export default function scrollPlav() {
    $(".header__item a").click(function(e) {
        e.preventDefault();
        const id = $(this).attr("href");
        const top = $(id).offset().top;
        $("html, body").animate({scrollTop: top}, 1000);
    });


    $(window).scroll(function() {
        if (window.pageYOffset >= $("#work").offset().top) {
            $(".up").addClass("active");
            console.log($(".up"));
        }
        if (window.pageYOffset <= $("#work").offset().top) {
            $(".up").removeClass("active");
            console.log($(".up"));
        }
    });
    $(".up").click(function(e) {
        e.preventDefault();
        const top = $(".header").offset().top;
        $("html, body").animate({scrollTop: top}, 1000);
    });
}