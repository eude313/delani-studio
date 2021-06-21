
function create(i,p)  {
    $ (document).ready(function(){
        i.click(function() {
            i.toggle();
            p.toggle();
        });
        p.click(function(){
            i.toggle();
            p.toggle();
        });
    });
   
}
create($('.brand'), $('.drop'));
create($('.brand2'), $('.drop2'));
create($('.brand3'), $('.drop3'));

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