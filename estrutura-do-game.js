//%%%%%%%%%%%%%%%%%%%%%%%%%%%%MÉTODOS DE INTERAÇÃO NO JOGOr%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function removeItens(p, button1, button2){

    

    var removeP = document.getElementById(p);
    removeP.remove();

    var removeButton1 = document.getElementById(button1);
    removeButton1.remove();

    var removeButton2 = document.getElementById(button2);
    removeButton2.remove();
}

function criaBotao(textOpcao, metodoQueChama, nomeDoIa){
    var botao = document.createElement("button");
    botao.innerHTML = textOpcao;
    document.getElementById("escolhas-painel").appendChild(botao);  
    botao.style.width = "200px";
    botao.style.height = "50px";
    botao.setAttribute("onclick", metodoQueChama);
    botao.setAttribute("id", nomeDoIa);
    botao.setAttribute("class", "btn");
}

function criaBotaoReset(textOpcao, metodoQueChama, nomeDoIa){
    var botao = document.createElement("button");
    botao.innerHTML = textOpcao;
    document.getElementById("escolhas-painel").appendChild(botao);  
    botao.setAttribute("onclick", metodoQueChama);
    botao.setAttribute("id", nomeDoIa);
    botao.setAttribute("class", "reset-button");
}

function removeImg(){
    var removeImg = document.getElementById("img-id");
    document.getElementById("img-div").removeChild(removeImg);
}

function criaImg(fonte){
    var imagemNova = document.createElement("img");
    imagemNova.src = fonte;
    document.getElementById("img-div").appendChild(imagemNova);
    imagemNova.setAttribute("id", "img-id");
}

function resultFinal(resultado) {
    var final = document.createElement("div");
    final.innerHTML = resultado;
    document.getElementById("escolhas-painel").appendChild(final);
    final.setAttribute("class", "animation");
    final.setAttribute("id", "final");
}

var nome;

//Metodo que inicia todo o jogo
function getName()
{
    //essa linha de código pega o que o usuario digitou no campo input nome
    nome = document.getElementById("nome-input").value;

    // aqui eu declaro os objetos htmls que serão variaveis em js
    var removeDigaNome = document.getElementById("diga-seu-nome");
    var removeNomeInput = document.getElementById("nome-input");
    var removeButtonInicial = document.getElementById("button-inicial");
    var removeIntro = document.getElementById("demo");
    
    if(nome === ""){
        removeNomeInput.setAttribute("placeholder", "FALA O NOME AEW OW");
    }else{

    

    //logo aqui, eu removo todos os elementos htmls para que a tela fique limpa, faço isso através das variaveis
    document.getElementById("escolhas-painel").removeChild(removeDigaNome);
    document.getElementById("escolhas-painel").removeChild(removeNomeInput);
    document.getElementById("escolhas-painel").removeChild(removeButtonInicial);
    document.getElementById("historia-painel").removeChild(removeIntro);

    inicio();

    }
}


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                         FUNÇÃO DE INICIO
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function inicio() {

    removeImg();

    criaImg("img/Ednaldo-show.jpg");

    


    var p = document.createElement("p")
    p.innerHTML = `${nome}, nosso querido artista, está pensando em fazer um show na virada do ano, MAS ESTAMOS EM PANDEMIA CARA, O QUE FARÁ?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "inicio");


    criaBotao("Você faz o show e ganha bastante grana.", "fezShow()", "fezShow-id");

    criaBotao("Você explica que esse não é o momento, para um show publico.", "outroJeito()", "outroJeito-id");

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//         LINHA DO TEMPO DE TER FEITO O SHOW FOI ABANDONADO E MORTO PELO EXÉRCITO
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function fezShow() {

    removeItens("inicio","fezShow-id", "outroJeito-id" );
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%esse bloco serve para criar o P da história e adiciona um id pra ele, que usararei posteriormente%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    var p = document.createElement("p")
    p.innerHTML = `${nome}, após o show, um vírus se instaurou na cidade natal do Ednaldo, e a mãe dele foi infectada e está sofrendo uma mutação estranha, ela está ficando verde e alta. Ednaldo ainda quer fazer shows e tem uma agenda cheia, o que vocês devem fazer?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "fezShow-p");

    //aqui eu crio e manipulo o primeiro botão

    criaBotao("Usa-la como um evento adicional e ganhar mais dinheiro.", "ednaldoAparencia()", "ednaldoAparencia-id");

    criaBotao("Leva-la ao hospital e cancelar os shows.", "ednaldoMaeHospital()", "ednaldoMaeHospital-id");
}

function ednaldoAparencia() {

    removeItens("fezShow-p","ednaldoAparencia-id", "ednaldoMaeHospital-id" );

    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%esse bloco serve para criar o P da história e adiciona um id pra ele, que usararei posteriormente%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    var p = document.createElement("p")
    p.innerHTML = `${nome}, após usa-la como um evento adicional, os fãs ficaram curiosos sobre como o Ednaldo era diferente de sua mãe, ele ficou incomodado com tais comentários e decidiu fazer algo a respeito. O que você como empresário, o que aconselha???`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "ednaldoAparencia-p");

    criaBotao("Faça com que se infecte e fique parecido com sua mãe.", "ednaldoInfectado()", "ednaldoInfectado-id");

    criaBotao("Diga que é apenas uma fantasia para acalmar os fãs.", "ednaldoFantasy()", "ednaldoFantasy-id");

}



function ednaldoInfectado() {


    removeImg();

    criaImg("img/ednaldo-monstro.jpg");

    removeItens("ednaldoAparencia-p", "ednaldoInfectado-id", "ednaldoFantasy-id" );


    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%esse bloco serve para criar o P da história e adiciona um id pra ele, que usararei posteriormente%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    var p = document.createElement("p");
    p.innerHTML = `${nome}, após ficar infectado com o vírus, Ednaldo virou o Abominável Ednaldo pereira, e sua vida corre risco, o que você fará?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "ednaldoInfectado-p");


    //aqui eu crio e manipulo o primeiro botão
    criaBotao("Chama o exercito e fique com a grana.", "ednaldoExercito()", "ednaldoExercito-id");

    criaBotao("Foge do pais com a grana.", "ednaldoAbandonado()", "ednaldoAbandonado-id");


}

function ednaldoExercito() {

    removeImg();

    criaImg("img/morte.gif");

    removeItens("ednaldoInfectado-p","ednaldoExercito-id", "ednaldoAbandonado-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, Infelizmente a história não se concluiu da forma que todos queriam, Ednaldo virou um ser indestrutivel que acabou com o exército brasileiro e descobriu que você foi o mandante de tudo, ele caçou você e roubou seu dinheiro, agora ele é rico, indestrutivel e talentoso, já você, um homem morto.
    `;

    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "ednaldoExercito-p");

    resultFinal("Você perdeu!!");

    criaBotaoReset("Jogar Novamente", "reset(`ednaldoExercito-p`, `final`, `botao-reset-id`)", "botao-reset-id");
}

function ednaldoAbandonado() {

    removeImg();

    criaImg("img/bomba.gif");

    removeItens("ednaldoInfectado-p","ednaldoExercito-id", "ednaldoAbandonado-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, Após fugir do pais com toda a grana, Ednaldo ficou furioso e foi pego de surpresa pelo exercito Brasileiro, por ter ficado decepcionado com sua traição, ele decidiu se matar, mas antes, ele acabou com toda a américa latina, você agora é rico mas não tem mais casa. 
    `;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "ednaldoAbandonado-p");
    

    resultFinal("Você ganhou...mais ou menos!");

    criaBotaoReset("Jogar Novamente", "reset(`ednaldoAbandonado-p`, `final`, `botao-reset-id`)", "botao-reset-id");
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//          LINHA DO TEMPO ONDE ELE SE APROVEITA DA DESCULPA DA FANTASIA
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function ednaldoFantasy() {

    removeItens("ednaldoAparencia-p", "ednaldoInfectado-id", "ednaldoFantasy-id" );
    

    var p = document.createElement("p");
    p.innerHTML = `${nome}, após dizer que é uma fantasia, o mesmo decide se infectar com o vírus para melhorar seu show, o que você fará`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "ednaldoFantasy-p");

    criaBotao("Faça com que ele fique infectado com o vírus para que assim ele assuma aparência semelhante a de sua mãe.", "ednaldoInfectado2()", "ednaldoInfectado-id");

    criaBotao("Dê a ideia de fabricar fantasias de mãe do Ednaldo para quem fiquem mais ricos!", "fabricarFantasias()", "fabricarFantasias-id");


}


function ednaldoInfectado2(){

    removeImg();

    criaImg("img/ednaldo-monstro.jpg");

    removeItens("ednaldoFantasy-p", "ednaldoInfectado-id", "fabricarFantasias-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, após ficar infectado com o vírus, Ednaldo virou o Abominável Ednaldo pereira, e sua vida corre risco, o que você fará?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "ednaldoInfectado-p");

    criaBotao("Chama o exercito e fique com a grana.", "ednaldoExercito()", "ednaldoExercito-id");

    criaBotao("Foge do pais com a grana.", "ednaldoAbandonado()", "ednaldoAbandonado-id");
}

function fabricarFantasias() {
    removeItens("ednaldoFantasy-p", "ednaldoInfectado-id", "fabricarFantasias-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, vocês ganharam muito dinheiro fazendo as fantasias, entretanto o Ednaldo insiste em querer se infectar para que fique mais veridico a atuação, mas você já esta podre de rico e está ficando de saco cheio dessa insistência, o que fará?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "fabricarFantasias-p");

    criaBotao("Faça com que ele fique infectado de uma vez por todas!!!", "ednaldoInfectado3()", "ednaldoInfectado3-id");
    criaBotao("Mete o pé dai que seu pé de meia já ta feito.", "peDeMeia()", "peDeMeia-id");

}

function ednaldoInfectado3(){
    removeItens("fabricarFantasias-p", "ednaldoInfectado3-id", "peDeMeia-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, após ficar infectado com o vírus, Ednaldo virou o Abominável Ednaldo pereira, e sua vida corre risco, o que você fará?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "ednaldoInfectado-p");

    criaBotao("Chama o exercito e fique com a grana.", "ednaldoExercito()", "ednaldoExercito-id");

    criaBotao("Foge do pais com a grana.", "ednaldoAbandonado()", "ednaldoAbandonado-id");
}

function peDeMeia() {

    removeImg();

    criaImg("img/deboa.jpg");

    removeItens("fabricarFantasias-p", "ednaldoInfectado3-id", "peDeMeia-id" );
    var p = document.createElement("p");
    p.innerHTML = `${nome}, você meteu o pé mesmo, achei que não teria coragem de fazer isso, mas graças a sua coragem você descolou um grana legal. Entretanto o Ednaldo está ficando cada vez mais louco e solitário, não recomendo que fique próximo a ele
    `;
    document.getElementById("historia-painel").appendChild(p);  
    p.setAttribute("id", "peDeMeia-p");

    resultFinal("Você ganhou! :D");
    criaBotaoReset("Jogar Novamente", "reset(`peDeMeia-p`, `final`, `botao-reset-id`)", "botao-reset-id");
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//         LINHA DO TEMPO ONDE VOCÊS LEVAM A MÃE PARA O HOSPITAL
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function ednaldoMaeHospital() {

    removeImg();

    criaImg("img/hospital.jpeg");
    
    removeItens("fezShow-p","ednaldoAparencia-id", "ednaldoMaeHospital-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, após leva-la ao hospital, muitas pessoas viram o Ednaldo e causaram tumultuo, sua mãe acabou infectando outras pessoas com o mesmo vírus. E após um tempo, as pessoas começaram a crescer e ficarão verdes, e sua mãe também. O que vocês farão?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "ednaldoMaeHospital-p");

    criaBotao("Deixar sua mãe lá no hospital e fugir.", "hospitalFugir()", "hospitalFugir-id");

    criaBotao("Se unir a horda e tentar domina-los.", "hospitalUnir()", "hospitalUnir-id");

}

function hospitalFugir() {

    removeItens("ednaldoMaeHospital-p","hospitalFugir-id", "hospitalUnir-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, após deixar sua mãe e fugir, Ednaldo ficou com um profundo arrependimento e preocupação, e queria voltar lá custe o que custar, você disse que não mas ele insistiu. O que você fará.`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "hospitalFugir-p");


    criaBotao("Deixar com que ele volte e fique infectado.", "hospitalInfectado()", "hospitalInfectado-id");

    criaBotao("Não deixa-lo infectar mesmo contra a sua vontade.", "hospitalNaoInfectado()", "hospitalNaoInfectado-id");

}

function hospitalInfectado() {

    removeImg();

    criaImg("img/morte.gif");

    removeItens("hospitalFugir-p","hospitalInfectado-id", "hospitalNaoInfectado-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, ao deixar voltar, ele foi infectado, mas não houve tempo para que ele achasse sua mãe e foi morto pelos outros infectados que estavam se tornando monstros assassinos, sua mãe apenas viu seu corpo morto no caminho e ficou furiosa e decidiu dominar todo o estado. Você foi pego no processo e foi aniquilado!
    `;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "hospitalInfectado-p");

    resultFinal("Você perdeu!");
    criaBotaoReset("Jogar Novamente", "reset(`hospitalInfectado-p`, `final`, `botao-reset-id`)", "botao-reset-id");

}

function hospitalNaoInfectado() {

    removeImg();

    criaImg("img/nadando-dinheiro.gif");

    removeItens("hospitalFugir-p","hospitalInfectado-id", "hospitalNaoInfectado-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, Como não deixou ele ser infectado, o exercito brasileiro foi chamado para exterminar a horda de monstros e a missão foi bem sucedida, Ednaldo virou o embaixador da luta contra o vírus visto que sua mãe tinha sido pega, e você ficou com os cachês de palestras e reuniões.
    <br>
    Você venceu!`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "hospitalNaoInfectado-p");

    resultFinal("Você venceu!");
    criaBotaoReset("Jogar Novamente", "reset(`hospitalNaoInfectado-p`, `final`, `botao-reset-id`)", "botao-reset-id");

}

function hospitalUnir() {

    removeItens("ednaldoMaeHospital-p","hospitalFugir-id", "hospitalUnir-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, ao se unir a horda, a mãe do Ednaldo virou a Rainha dos pepeirinhas infectados, e ele queria ser o príncipe da horda, mas ela não o reconheceu como tal pois ele não tinha o virus em seu sangue, ele te pediu uma dica para ganhar seu lugar ao domínio, o que você sugere?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "hospitalUnir-p");

    criaBotao("Usar o talento supremo de grande cantor para conquista-los.", "usarTalento2()", "usarTalento2-id");

    criaBotao("Pedir para que a mãe dele o infecte se unindo a horda.", "maeInfecta()", "maeInfecta-id");


}

function usarTalento2() {

    removeImg();

    criaImg("img/ednaldo-grana.gif");

    removeItens("hospitalUnir-p","usarTalento2-id", "maeInfecta-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, Como Ednaldo pereira é um mito da musica brasileira, ele converteu a todo o exercito de zumbis infectados em seus seguidores e sua mãe ficou extremamente orgulhosa, após tudo isso, alguns dos monstrinhos formaram suas próprias boybands de K-pop inspirado pelo Ednaldo e sua musica, sua mãe virou a maior cantora zumbi contemporânea e o seu filho, o líder de um movimento cultural que mudou toda a história da musica mundial. E você? Onde entra nessa história? Ficou bilionário, pois vendeu milhares de shows em todo o mundo.
    `;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "usarTalento2-p");

    resultFinal("Você venceu!");
    criaBotaoReset("Jogar Novamente", "reset(`usarTalento2-p`, `final`, `botao-reset-id`)", "botao-reset-id");

  
}

function maeInfecta() {

    removeImg();

    criaImg("img/falido.gif");

    removeItens("hospitalUnir-p","usarTalento2-id", "maeInfecta-id" );

    var p = document.createElement("p");
    p.innerHTML = `${nome}, Ao ser infectado pela sua mãe, Ednaldo acabou perdendo seu talento para a musica e você não viu mais utilidade em trabalhar com ele, entretanto ele não queria parar a carreira, e os shows foram mal sucedidos, todo o cachê que você ganhou dos shows foram destinados a pagar as despesas, até irem a falência. Ou seja, você ficou pobre..`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "maeInfecta-p");

    resultFinal("Você perdeu!");

    criaBotaoReset("Jogar Novamente", "reset(`maeInfecta-p`, `final`, `botao-reset-id`)", "botao-reset-id");

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                 LINHA DO TEMPO ONDE VOCÊS TENTAM FAZER UMAS LIVES MAROTAS
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function outroJeito() {

    removeItens("inicio","fezShow-id", "outroJeito-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, você propôs que ele faça shows no Youtube ao vivo, entretanto o ele precisa de músicas autorais para não tomar strike, e o que fará a respeito disso?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "outroJeito-p");

    

    criaBotao("Propor que o Ednaldo componha suas próprias músicas.", "comporMusicas()", "comporMusicas-id");

    criaBotao("Peça ao caetano veloso que ele componha suas músicas.", "pedirAoCaetano()", "pedirAoCaetano-id");
  
}

function comporMusicas() {

    removeItens("outroJeito-p","comporMusicas-id", "pedirAoCaetano-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, ao compor suas próprias musicas, você viu que o Ednaldo era um compositor fora de realidade, uma LENDA, mas você ficou com medo ele seja roubado por isso, e sugeriu que ele registrasse as musicas antes da live, mas o Ednaldo está cagando pra isso, o que fará?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "comporMusicas-p");

    

    criaBotao("Para registrar sem o conhecimento dele.", "registrar()", "registrar-id");

    criaBotao("Que ele se ferre já que ele tá cagando mesmo.", "seFerrar()", "seFerrar-id");


}

function registrar() {
    
    removeItens("comporMusicas-p","registrar-id", "seFerrar-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, Ednaldo soube que você registrou as músicas sem a autorização dele, ele ficou boladão da vida porque é muito prepotente, mas você não registrou ainda pois precisa ver a porcentagem, e caso queira, pode colocar tudo no seu nome e dane-se ele. O que dirá para ele?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "registrar-p");

    criaBotao("Não registrei nada fica tranquilo (registrei no meu nome ele que lute).", "naoRegistrei()", "naoRegistrei-id");

    criaBotao("Ainda não registrei, as musicas são suas, precisa da sua autorização.", "precisaAssinatura()", "precisaAssinatura-id");

}

function naoRegistrei() {

    removeImg();

    criaImg("img/rico-compondo.gif");

    removeItens("registrar-p","naoRegistrei-id", "precisaAssinatura-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, você não foi Leal com sua palavra mas registrou as musicas, as lives aconteceram e você cobrou direito autoral de todas elas e ficou mais rico do que já estava, Ednaldo foi burro o suficiente de não perceber isso e ele acabou fazendo mais e mais lives sem ganhar um tostão por elas.`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "naoRegistrei-p");

    resultFinal("Você venceu!");
    criaBotaoReset("Jogar Novamente", "reset(`naoRegistrei-p`, `final`, `botao-reset-id`)", "botao-reset-id");

}

function precisaAssinatura() {

    removeImg();

    criaImg("img/roubados.gif");

    removeItens("registrar-p","naoRegistrei-id", "precisaAssinatura-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, você foi leal com sua palavra, mas o Ednaldo é burro o suficiente pra não te ouvir e não registrou nada, você terminou com o cache das lives, mas as musicas dele foram roubadas.`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "precisaAssinatura-p");

    resultFinal("Você perdeu!");
    criaBotaoReset("Jogar Novamente", "reset(`precisaAssinatura-p`, `final`, `botao-reset-id`)", "botao-reset-id");

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//        LINHA DO TEMPO ONDE AS LIVES ACONTECEM MAS VOCÊ NÃO LIGA PROS DIREITOS AUTORAIS
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function seFerrar() {

    removeItens("comporMusicas-p","registrar-id", "seFerrar-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, ao fazer as lives sem registrar as musicas inúmeros outros compositores vieram em busca de registra-las e você ficou sem opções visto que o nosso MITO está cagando para isso, você ficou sem opções. O que fará?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "seFerrar-p");

    criaBotao("Registra tudo e fica rico as custas dele, ele não liga mesmo né.", "registraTudo()", "registraTudo-id");

    criaBotao("Deixar que a bomba exploda no colo dele e sair com seus cachês do show.", "bombaExplode()", "bombaExplode-id");


}

function registraTudo() {
    removeImg();

    criaImg("img/falido.gif");

    removeItens("seFerrar-p","registraTudo-id", "bombaExplode-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, ednaldo descobriu que você registrou tudo sem ele saber, e te processou por isso, todo o dinheiro que você ganhou dos cachês dos shows foram para pagar os processos, ou seja, você ficou pobre.`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "registraTudo-p");

    resultFinal("Você perdeu!");
    criaBotaoReset("Jogar Novamente", "reset(`registraTudo-p`, `final`, `botao-reset-id`)", "botao-reset-id");
}

function bombaExplode() {

    removeImg();

    criaImg("img/rico-compondo.gif");

    removeItens("seFerrar-p","registraTudo-id", "bombaExplode-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, você deixou a bomba explodir e todas as suas musicas foram roubadas, Ednaldo culpou você por isso, mas ele não tinha meios de provar isso e nem de processar, você ficou com os cachês dos shows e ele ficou pobre.`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "bombaExplode-p");

    resultFinal("Você venceu!!");
    criaBotaoReset("Jogar Novamente", "reset(`bombaExplode-p`, `final`, `botao-reset-id`)", "botao-reset-id");

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                         LINHA DO TEMPO 2 do caetano
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function pedirAoCaetano() {
    removeImg();

    criaImg("img/caetano-rindo.jpg");

    removeItens("outroJeito-p","comporMusicas-id", "pedirAoCaetano-id" );

    

    var p = document.createElement("p")
    p.innerHTML = `${nome}, ao pedir para o Caetano veloso algumas composições, o mesmo fez pouco caso do talento de Ednaldo, e o nosso ídolo ficou ofendido e queria fazer algo a respeito. O que sugere?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "pedirAoCaetano-p");

    criaBotao("Sequestrar Caetano para que ele componha as musicas de Ednaldo.", "Sequestrar()", "Sequestrar-id");

    criaBotao("Mostrar ao Caetano o talento supremo de Ednaldo Pereira.", "usarTalento()", "usarTalento-id");

}

function Sequestrar() {

    removeImg();

    criaImg("img/sequestro.jpg");

    removeItens("pedirAoCaetano-p","Sequestrar-id", "usarTalento-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, o sequestro foi bem sucedido e após horas de tortura, ameaça e suborno, ele compôs 70 musicas únicas e incríveis, quando a live foi ao ar com as musicas ensaiadas, o publico cancelou o Ednaldo Pereira e ele foi linchado nas redes sociais, por quê? Porque todas elas tinham mensagens subliminares dizendo onde estava o paradeiro do Caetano e o que aconteceu. Vocês tem que fazer algo a respeito, o que farão?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "Sequestrar-p");

    criaBotao("Se entregar a Policia.", "seEntregar()", "seEntregar-id");

    criaBotao("Fugir com a grana.", "fugirComAGrana()", "fugirComAGrana-id");


}

function seEntregar() {

    removeImg();

    criaImg("img/atras-grades.gif");

    removeItens("Sequestrar-p","seEntregar-id", "fugirComAGrana-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, ao se entregar pra policia, Ednaldo declarou que você era o mandante de tudo e foi absolvido, já você, foi preso e morto na prisão.
    `;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "seEntregar-p");

    resultFinal("Acho que não precisa nem dizer que você perdeu né?");
    criaBotaoReset("Jogar Novamente", "reset(`seEntregar-p`, `final`, `botao-reset-id`)", "botao-reset-id");
}

function fugirComAGrana() {

    removeImg();

    criaImg("img/fbi.gif");

    removeItens("Sequestrar-p","seEntregar-id", "fugirComAGrana-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, vocês não foram muito longe, a grana por mais que tinha vindo, não foi muito por causa do cancelamento, e a policia achou vocês rapidamente.
    `;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "fugirComAGrana-p");

    resultFinal("PERDEU PLAYBOY!!");
    criaBotaoReset("Jogar Novamente", "reset(`fugirComAGrana-p`, `final`, `botao-reset-id`)", "botao-reset-id");

}

function usarTalento() {

    removeImg();

    criaImg("img/caetano-surpreso.jpg");

    removeItens("pedirAoCaetano-p","Sequestrar-id", "usarTalento-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, ao mostrar o dom de Ednaldo para Caetano, o mesmo ficou estuperfarto com tamanho dom para musica, e quis participar da live. O que você sugere?`;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "usarTalento-p");

    criaBotao("Deixar Caetano participar", "deixarParticipar()", "deixarParticipar-id");

    criaBotao("Não deixar ele participar", "naoDeixarParticipar()", "naoDeixarParticipar-id");

}

function deixarParticipar() {

    removeImg();

    criaImg("img/nadando-dinheiro.gif");

    removeItens("usarTalento-p","deixarParticipar-id", "naoDeixarParticipar-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, ao deixar participar, o sucesso veio a tona e logo eles se tornaram uma dupla de musica popular brasileira, venderam milhões de shows, lives e muuuito streams, e você ficou milionário, parabéns.
    `;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "deixarParticipar-p");

    resultFinal("VOCÊ FICOU MUITO RICO!!");
    criaBotaoReset("Jogar Novamente", "reset(`deixarParticipar-p`, `final`, `botao-reset-id`)", "botao-reset-id");
}

function naoDeixarParticipar() {
    removeImg();

    criaImg("img/fazer-oque.jpg");

    removeItens("usarTalento-p","deixarParticipar-id", "naoDeixarParticipar-id" );

    var p = document.createElement("p")
    p.innerHTML = `${nome}, por não deixa-lo participar, por medo de represaria, Caetano conversou a sós com Ednaldo que conseguiu convence-lo a te demitir, os dois fizeram sucesso juntos e você ficou com alguma grana, mas não tanto.
    `;
    document.getElementById("historia-painel").appendChild(p);
    p.setAttribute("id", "naoDeixarParticipar-p");

    resultFinal("Não perdeu tanto assim.");


    criaBotaoReset("Jogar Novamente", "reset(`naoDeixarParticipar-p`, `final`, `botao-reset-id`)", "botao-reset-id");
}
