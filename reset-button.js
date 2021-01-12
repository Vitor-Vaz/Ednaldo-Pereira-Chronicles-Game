function reset(p, p2, button){
    removeImg()
    criaImg("img/Ednaldo-capa.jpg");
  
    var remove = document.getElementById(p);
    remove.remove();

    var remove = document.getElementById(p2);
    remove.remove();

    var remove = document.getElementById(button);
    remove.remove();

    var intro = document.createElement("p");
    intro.innerText = `Bem vindo ao Ednaldo Pereira Chronicles! Nessa aventura, você será empresario do maior cantor que a musica Brasileira já presenciou, você tomará decisões importantes em relação a carreira dele, e essas decisões precisam estar de acordo com suas vontades ou você será demitido ou algo pior. Boa sorte!`;
    document.getElementById("historia-painel").appendChild(intro);
    intro.setAttribute("id", "demo");
    

    var textInput = document.createElement("div");
    textInput.innerText = `Por favor, nos diga seu nome para começar.`;
    document.getElementById("escolhas-painel").appendChild(textInput);
    textInput.setAttribute("id", "diga-seu-nome");
    textInput.setAttribute("class", "nome");

    var input = document.createElement("input");
    document.getElementById("escolhas-painel").appendChild(input);
    input.setAttribute("id", "nome-input");
    input.setAttribute("type", "text");

    var botao = document.createElement("button");
    botao.innerText = `Começar.`;
    document.getElementById("escolhas-painel").appendChild(botao);
    botao.setAttribute("id", "button-inicial");
    botao.setAttribute("class", "btn");
    botao.setAttribute("onclick", "getName()");

}