//Código para pedir precio y nombre por pantalla. Luego de esto se mostrara el total a pagar y un saludo. Las acciones serán accionadas por un botón:
//Con el addEventListener se pueden poner infinitas veces; mientras que el onclick solo puede ser usado una vez.

window.onload=inicio;

function inicio(){
    document.getElementById("calculo").addEventListener("click",calcular);
    document.getElementById("saludo").addEventListener("click",saludar);
}

function saludar(){
    nom = prompt("Ingrese su nombre");
    document.getElementById("tSaludo").innerHTML=`Hola ${nom}`;
}

function calcular(){
    let precio = prompt("Ingrese el precio del producto");
    let total = parseFloat(precio)+(parseFloat(precio)*0.19);
    document.getElementById("tCalculo").innerHTML=`El total a pagar es: ${total}`;
}