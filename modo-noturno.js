var modoNoturno = false;

function teste(){
    var cabecalho = document.querySelector("#titu");
    var footer = document.querySelector("#fot");
    var main = document.querySelector("#caixa-principal");

    if (modoNoturno == false) {
        cabecalho.classList.add("titulo-noturno");
        main.classList.add("main-container-noturno");
        footer.classList.add("footer-noturno");
        
        modoNoturno = true;
    } else {
        cabecalho.classList.remove("titulo-noturno");
        main.classList.remove("main-container-noturno");
        footer.classList.remove("footer-noturno");
        modoNoturno = false;
    }
}