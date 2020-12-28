export default function tabs() {
    const tab = $(".tab");
    const content = $(".content");
    tab.on("click", function() {
        $(".active").removeClass("active");
        $(this).toggleClass("active");
        const target = $(this).attr("data-tab");
        $(`.content[data-tab="${target}"]`).toggleClass("active");
    });
}