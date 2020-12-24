


var moral = 4;
var cache = 0;




function darNome(){
    var nome = document.getElementById("nome-input").value;
    return nome; 
}
var nome = darNome();

console.log(nome);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                         FUNÇÃO DE INICIO
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function inicio() {
    alert(`Bem vindo ao Ednaldo Pereira Chronicles!
    Nessa aventura, você será empresario do maior cantor que a musica Brasileira já presenciou, você tomara decisões importantes em relação a carreira dele, e essas decisões precisam estar de acordo com suas vontades ou você será demitido ou algo pior. Boa sorte!
    `);

    var respUm = confirm(` O nosso querido artista, está pensando em fazer um show na virada do ano, MAS ESTAMOS EM PANDEMIA CARA, O QUE FARÁ?
    OK – Você faz o show e ganha bastante grana.
    Cancelar - Você explica que esse não é o momento, para um show publico.
   `)
    if (respUm) {
        fezShow()
    } else {
        outroJeito()
    }

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//         LINHA DO TEMPO DE TER FEITO O SHOW FOI ABANDONADO E MORTO PELO EXÉRCITO
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function fezShow() {
    var mae = confirm(`${nome}, Após o show, um vírus se instaurou na cidade natal do Ednaldo, e a mãe dele foi infectada e está sofrendo uma mutação estranha, ela está ficando verde e alta. Ednaldo ainda quer fazer shows e tem uma agenda cheia, o que vocês devem fazer?
    OK - Usa-la como um evento adicional e ganhar mais dinheiro.
    Cancelar - Leva-la ao hospital e cancelar os shows.
    `)
    if (mae) {
        ednaldoAparencia()
    } else {
        ednaldoMaeHospital()
    }
}

function ednaldoAparencia() {
    var aparencia = confirm(`${nome}, após usa-la como um evento adicional, os fãs ficaram curiosos sobre como o Ednaldo era diferente de sua mãe, ele ficou incomodado com tais comentários e decidiu fazer algo a respeito. O que você como empresário, o que aconselha???
    OK - Faça com que ele fique infectado com o vírus para que assim ele assuma aparência de sua mãe.
    Cancelar - Diga que é apenas uma fantasia para acalmar os fãs.
    `)
    if (aparencia) {
        ednaldoInfectado()
    } else {
        ednaldoFantasy()
    }
}

function ednaldoInfectado() {
    var infectado = confirm(`${nome}, após ficar infectado com o vírus, Ednaldo virou o Abominável Ednaldo pereira, e sua vida corre risco, o que você fará?

    OK - Chama o exercito para mata-lo e fica com a grana.
    Cancelar - Foge do pais com a grana.
    `)
    if (infectado) {
        ednaldoExercito()
    } else {
        ednaldoAbandonado()
    }
}

function ednaldoExercito() {
    alert("Infelizmente a história não se concluiu da forma que todos queriam, Ednaldo virou um ser indestrutivel que acabou com o exército brasileiro e descobriu que você foi o mandante de tudo, ele caçou você e roubou sei dinheiro, agora ele é rico, indestrutivel e talentoso, e você, um homem morto");
    alert("Você perdeu!");
}

function ednaldoAbandonado() {
    alert("Após fugir do pais com toda a grana, Ednaldo ficou furioso e foi pego de surpresa pelo exercito Brasileiro, por ter ficado decepcionado com sua traição, ele decidiu se matar, mas antes, ele acabou com toda a américa latina, você agora é rico mas não tem mais casa");
    alert(`Você ganhou!
    
    
    ou não...
    `);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//          LINHA DO TEMPO ONDE ELE SE APROVEITA DA DESCULPA DA FANTASIA
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function ednaldoFantasy() {
    var fantasia = confirm(`${nome}, após dizer que é uma fantasia, o mesmo decide se infectar com o vírus para melhorar seu show, o que você fará?
    OK - Faça com que ele fique infectado com o vírus para que assim ele assuma aparência semelhante a de sua mãe.
    Cancelar - Dê a ideia de fabricar fantasias de mãe do Ednaldo para quem fiquem mais ricos!.
    `)
    if (fantasia) {
        ednaldoInfectado()
    } else {
        fabricarFantasias()
    }
}

function fabricarFantasias() {
    var fantasia = confirm(`${nome}, vocês ganharam muito dinheiro fazendo as fantasias, entretanto o Ednaldo insiste em querer se infectar para que fique mais veridico a atuação, mas você já esta podre de rico e está ficando de saco cheio dessa insistência, o que fará?
    OK - Faça com que ele fique infectado de uma vez por todas!!!
    Cancelar - Mete o pé dai que seu pé de meia já ta feito.
    `)
    if (fantasia) {
        ednaldoInfectado()
    } else {
        peDeMeia()
    }
}

function peDeMeia() {
    alert(`você meteu o pé mesmo, achei que não teria coragem de fazer isso, mas graças a sua coragem você descolou um grana legal. Entretanto o Ednaldo está ficando cada vez mais louco e solitário, não recomendo que fique próximo a ele`);
    alert(`Você ganhou! :D `);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//         LINHA DO TEMPO ONDE VOCÊS LEVAM A MÃE PARA O HOSPITAL
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function ednaldoMaeHospital() {
    var hospital = confirm(`${nome}, após leva-la ao hospital, muitas pessoas viram o Ednaldo e causaram tumultuo, sua mãe acabou infectando outras pessoas com o mesmo vírus. E após um tempo, as pessoas começaram a crescer e ficarão verdes, e sua mãe também. O que vocês farão?
    OK - Deixar sua mãe lá no hospital e fugir.
    Cancelar - Se unir a horda e tentar domina-los.
    `)
    if (hospital) {
        hospitalFugir()
    } else {
        hospitalUnir()
    }
}

function hospitalFugir() {
    var hospitalFuga = confirm(`${nome}, após deixar sua mãe e fugir, Ednaldo ficou com um profundo arrependimento e preocupação, e queria voltar lá custe o que custar, você disse que não mas ele insistiu. O que você fará.
    OK - Deixar com que ele volte e fique infectado.
    Cancelar - Não deixa-lo infectar mesmo contra a sua vontade.
    `)
    if (hospitalFuga) {
        hospitalInfectado()
    } else {
        hospitalNaoInfectado()
    }
}

function hospitalInfectado() {
    alert(`Ao deixar voltar, ele foi infectado, mas não houve tempo para que ele achasse sua mãe e foi morto pelos outros infectados que estavam se tornando monstros assassinos, sua mãe apenas viu seu corpo morto no caminho e ficou furiosa e decidiu dominar todo o estado. Você foi pego no processo e foi aniquilado!`);
    alert(`Você perdeu!`);
}

function hospitalNaoInfectado() {
    alert(`Como não deixou ele ser infectado, o exercito brasileiro foi chamado para exterminar a horda de monstros e a missão foi bem sucedida, Ednaldo virou o embaixador da luta contra o vírus visto que sua mãe tinha sido pega, e você ficou com os cachês de palestras e reuniões.`);
    alert(`Você venceu!`);
}

function hospitalUnir() {
    var hospitalUnido = confirm(`${nome}, Ao se unir a horda, a mãe do Ednaldo virou a Rainha dos pepeirinhas infectados, e ele queria ser o príncipe da horda, mas ela não o reconheceu como tal pois ele não tinha o virus em seu sangue, ele te pediu uma dica para ganhar seu lugar ao domínio, o que você sugere?
    OK - Usar seu talento supremo de grande cantor para conquista-los.
    Cancelar - Pedir para que a mãe dele o infecte.
    `)
    if (hospitalUnido) {
        usarTalento()
    } else {
        maeInfecta()
    }
}

function usarTalento() {
    alert(`Como Ednaldo pereira é um mito da musica brasileira, ele converteu a todo o exercito de zumbis infectados em seus seguidores e sua mãe ficou extremamente orgulhosa, após tudo isso, alguns dos monstrinhos formaram suas próprias boybands de K-pop inspirado pelo Ednaldo e sua musica, sua mãe virou a maior cantora zumbi contemporânea e o seu filho, o líder de um movimento cultural que mudou toda a história da musica mundial. E você? Onde entra nessa história? Ficou bilionário, pois vendeu milhares de shows em todo o mundo..`);
    alert(`Você venceu!`);
}

function maeInfecta() {
    alert(`Ao ser infectado pela sua mãe, Ednaldo acabou perdendo seu talento para a musica e você não viu mais utilidade em trabalhar com ele, entretanto ele não queria parar a carreira, e os shows foram mal sucedidos, todo o cachê que você ganhou dos shows foram destinados a pagar as despesas, até irem a falência. Ou seja, você ficou pobre.`);
    alert(`Você perdeu!`);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                 LINHA DO TEMPO ONDE VOCÊS TENTAM FAZER UMAS LIVES MAROTAS
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function outroJeito() {
    var outro = confirm(`${nome}, você propôs que ele faça shows no Youtube ao vivo, entretanto o ele precisa de músicas autorais para não tomar strike, e o que fará a respeito disso?
    OK - Propor que o Ednaldo componha suas próprias músicas.
    Cancelar - Peça ao caetano veloso que ele componha suas músicas
    `)
    if (outro) {
        usarTalento()
    } else {
        pedirAoCaetano()
    }

}

function comporMusicas() {
    var outro = confirm(`${nome}, ao compor suas próprias musicas, você viu que o Ednaldo era um compositor fora de realidade, uma LENDA, mas você ficou com medo ele seja roubado por isso, e sugeriu que ele registrasse as musicas antes da live, mas o Ednaldo está cagando pra isso, o que você fará?
    OK - Para registrar sem o conhecimento dele.
    Cancelar - para que ele se ferre já que ele tá cagando.
    `)
    if (outro) {
        registrar()
    } else {
        seFerrar()
    }

}

function registrar() {
    var registro = confirm(`${nome}, Ednaldo soube que você registrou as músicas sem a autorização dele, ele ficou boladão da vida porque é muito prepotente, mas você não registrou ainda pois precisa ver a porcentagem, e caso queira, pode colocar tudo no seu nome e dane-se ele. O que dirá para ele?
    OK - Não registrei nada fica tranquilo (registrei no meu nome ele que lute).
    Cancelar - Ainda não registrei, as musicas são suas, precisa da sua autorização. 
    `)
    if (registro) {
        naoRegistrei()
    } else {
        precisaAssinatura()
    }

}

function naoRegistrei() {
    alert(`Você não foi Leal com sua palavra mas registrou as musicas, as lives aconteceram e você cobrou direito autoral de todas elas e ficou mais rico do que já estava, Ednaldo foi burro o suficiente de não perceber isso e ele acabou fazendo mais e mais lives sem ganhar um tostão por elas.`);
    alert(`Você venceu!`);
}

function precisaAssinatura() {
    alert(`Você foi leal com sua palavra, mas o Ednaldo é burro o suficiente pra não te ouvir e não registrou nada, você terminou com o cache das lives, mas as musicas dele foram roubadas`);
    alert(`Você perdeu!`);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//        LINHA DO TEMPO ONDE AS LIVES ACONTECEM MAS VOCÊ NÃO LIGA PROS DIREITOS AUTORAIS
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function seFerrar() {
    var ferrou = confirm(`${nome}, ao fazer as lives sem registrar as musicas inúmeros outros compositores vieram em busca de registra-las e você ficou sem opções visto que o nosso MITO está cagando para isso, você ficou sem opções. O que fará?
    OK - Registra tudo e fica rico as custas dele.
    Cancelar - Deixar que a bomba exploda no colo dele e sair com seus cachês do show.
    `)
    if (ferrou) {
        registraTudo()
    } else {
        bombaExplode()
    }

}

function registraTudo() {
    alert(`Ednaldo descobriu que você registrou tudo sem ele saber, e te processou por isso, todo o dinheiro que você ganhou dos cachês dos shows foram para pagar os processos, ou seja, você ficou pobre.`);
    alert(`Você perdeu!`);
}

function bombaExplode() {
    alert(`Você deixou a bomba explodir e todas as suas musicas foram roubadas, Ednaldo culpou você por isso, mas ele não tinha meios de provar isso e nem de processar, você ficou com os cachês dos shows e ele ficou pobre.`);
    alert(`Você venceu!`);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                         LINHA DO TEMPO 2 do caetano
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function pedirAoCaetano() {
    var pedirProCaetano = confirm(`${nome}, ao pedir para o Caetano veloso algumas composições, o mesmo fez pouco caso do talento de Ednaldo, e o nosso ídolo ficou ofendido e queria fazer algo a respeito. O que sugere?
    OK - Sequestrar Caetano para que ele componha as musicas de Ednaldo.
    Cancelar - Mostrar ao Caetano o talento de Ednaldo.
    `)
    if (pedirProCaetano) {
        Sequestrar()
    } else {
        usarTalento()
    }

}

function Sequestrar() {
    var sequesto = confirm(`${nome}, o sequestro foi bem sucedido e após horas de tortura, ameaça e suborno, ele compôs 70 musicas únicas e incríveis, quando a live foi ao ar com as musicas ensaiadas, o publico cancelou o Ednaldo Pereira e ele foi linchado nas redes sociais, por quê? Porque todas elas tinham mensagens subliminares dizendo onde estava o paradeiro do Caetano e o que aconteceu. Vocês tem que fazer algo a respeito, o que farão?
    OK - Se entregar a Policia.
    Cancelar - Fugir com a grana.
    `)
    if (sequesto) {
        seEntregar()
    } else {
        fugirComAGrana()
    }

}

function seEntregar() {
    alert(`Ao se entregar pra policia, Ednaldo declarou que você era o mandante de tudo e foi absolvido, já você, foi preso e morto na prisão.`);
    alert(`Acho que não precisa nem dizer que você perdeu né?`);
}

function fugirComAGrana() {
    alert(`Vocês não foram muito longe, a grana por mais que tinha vindo, não foi muito por causa do cancelamento, e a policia achou vocês rapidamente.`);
    alert(`PERDEU PLAYBOY `);
}

function usarTalento() {
    var talento = confirm(`Ao mostrar o dom de Ednaldo para Caetano, o mesmo ficou estuperfarto com tamanho dom para musica, e quis participar da live. O que você sugere?
    OK - Deixar Caetano participar.
    Cancelar - Não deixar ele participar
    `)
    if (talento) {
        deixarParticipar()
    } else {
        naoDeixarParticipar()
    }

}

function deixarParticipar() {
    alert(`Ao deixar participar, o sucesso veio a tona e logo eles se tornaram uma dupla de musica popular brasileira, venderam milhões de shows, lives e muuuito streams, e você ficou milionário, parabéns.`);
    alert(`VOCÊ FICOU MUITO RICO `);
}

function naoDeixarParticipar() {
    alert(`Ao não deixa-lo participar, por medo de represaria, Caetano conversou a sós com Ednaldo que conseguiu convence-lo a te demitir, os dois fizeram sucesso juntos e você ficou com alguma grana, mas não tanto.`);
    alert(`Não perdeu tanto assim.`);
}
