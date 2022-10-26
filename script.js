function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}

function carregar(){
var img = document.getElementById("imagemAtual");
var msg = document.getElementById("msg");
var msg2 = document.getElementById("msg2");
var section = document.getElementById("section");
var header = document.getElementById("header");
var footer = document.getElementById("footer");
var data = new Date();
var horas = data.getHours();
var minutos = data.getMinutes();
msg.innerHTML = `Horario Atual: ${adicionaZero(horas)}:${adicionaZero(minutos)}`;
if(horas >= 5 && horas <= 12){
    img.src = "fotomanha.png"
    document.body.style.background = "#ecd8c4";
    msg.style.color = "#b8885a";
    msg2.style.color = "#b8885a";
    msg2.innerText = "Bom dia!";
    section.style.background = "#ece5df";
    header.style.color = "#734d2a";
    footer.style.color = "#734d2a";
}else if(horas > 12 && horas <= 18){
    img.src = "fototarde.png"
    document.body.style.background = "#e9a470";
    msg.style.color = "#9a490d";
    msg2.style.color = "#9a490d";
    msg2.innerText = "Boa Tarde!";
    section.style.background = "#f1c29e";
    header.style.color = "#69340c";
    footer.style.color = "#69340c";
}else{
    img.src = "fotonoite.png"
    document.body.style.background = "#466e9d";
    msg.style.color = "#112f51";
    msg2.style.color = "#112f51";
    msg2.innerText = "Boa Noite!";
    section.style.background = "#87acd6";
    header.style.color = "#051528";
    footer.style.color = "#051528";
}
}