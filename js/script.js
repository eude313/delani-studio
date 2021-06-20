
$('.brand').click(function () {
    $(this).children('.drop').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
});  

$(".range").hover(function () {
    $(this).children(".red").slideToggle(1000, "linear");
});

$("button").click(function (Eudes) {
    alert(' Dear ' + 'customer' + ' we have received your message successfully. ' + ' Reach out to us anytime');
    Eudes.preventDefault();
});

$("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
});