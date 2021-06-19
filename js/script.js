
$('.brand').click(function () {
    $(this).children('.drop').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
});  

$(".blue").hover(function () {
    $(this).children(".red").slideToggle(1000, "linear");
});
