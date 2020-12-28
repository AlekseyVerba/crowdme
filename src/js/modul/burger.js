export default function burger() {
    $(".burger").click(function() {
        $(".header__nav").toggleClass("active");
    });
}