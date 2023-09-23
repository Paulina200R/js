//Cambiar estilo de un objeto en html
window.onload=inicio;

function inicio(){
    document.getElementById("cosa").onclick=cambiar;
}

function cambiar(){
    let div = document.getElementById("cosa").style;
    div.backgroundColor="Purple";
    div.transform="scale(1.1)";
    div.border="none";
}