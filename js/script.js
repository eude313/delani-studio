
$('.brand').click(function () {
    $(this).children('.drop').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
});  

$(".blue").hover(function () {
    $(this).children(".red").slideToggle(1000, "linear");
});

$("button").click(function (Eudes) {
    let client = document.getElementsByClass('nameDetail').value;
    alert(' Dear ' + nameDetail + ' we have received your message successfully. ' + ' Reach out to us anytime');
    Eudes.preventDefault();
});