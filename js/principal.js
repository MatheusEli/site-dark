function sliderDireita(){

    var atual = $(".slider .sliderAtivo");
    
    if(atual.next().length == 0){

        var proximo = $(".slider li:first");
    }else{

        var proximo = atual.next();
    }

    proximo.addClass("sliderAtivo").fadeIn();
    atual.removeClass("sliderAtivo").fadeOut();
}

$(".seta-direita").click(sliderDireita);

function sliderEsquerda(){

    var atual = $(".slider .sliderAtivo");
    
    if(atual.prev().length == 0){

        var anterior = $(".slider li:last");
    }else{

        var anterior = atual.prev();
    }

    anterior.addClass("sliderAtivo").fadeIn();
    atual.removeClass("sliderAtivo").fadeOut();
}

$(".seta-esquerda").click(sliderEsquerda);

$(function(){

    window.setInterval(sliderDireita, 5000);
});