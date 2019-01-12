$("#slider li:first").fadeIn();
$("#slider li:first figcaption").fadeIn();
timer();

$(".seta-direita").click(sliderDireita);
$(".seta-esquerda").click(sliderEsquerda);
var interval;


function sliderDireita(){

    var atual = $("#slider .sliderAtivo");
    var proximo = atual.next().length ? atual.next() : $("#slider li:first");

    proximo.addClass("sliderAtivo").fadeIn();
    atual.removeClass("sliderAtivo").fadeOut();

    
    $(".sliderAtivo figcaption").fadeIn();

    window.clearInterval(interval);
    timer();
}

function sliderEsquerda(){

    var atual = $("#slider .sliderAtivo");
    var anterior = atual.prev().length ? atual.prev() : $("#slider li:last");

    anterior.addClass("sliderAtivo").fadeIn();
    atual.removeClass("sliderAtivo").fadeOut();

    $(".sliderAtivo figcaption").fadeIn();

    window.clearInterval(interval);
    timer();
}

function timer(){

    interval = window.setInterval(sliderDireita, 5000);

};
