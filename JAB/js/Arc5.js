//Código para pedir diferentes palabras en un mismo input e imprimir esta cadena en el momento que el usuario desee.
window.onload = inicio;
var cadena = "";

function inicio() {
    document.getElementById("espacio").addEventListener("click", recolectar);
    document.getElementById("resul").addEventListener("click", impresion);
}

function recolectar() {
    var palabra = document.getElementById("word").value;
    cadena = cadena + " " + palabra;
    document.getElementById("word").value = "";
    document.getElementById("word").placeholder = "Ingrese la siguiente palabra";
    
    if (impresion == true) {
    }
}

function impresion() {
    document.getElementById("total").innerHTML = cadena;
}