//Crear programa donde se ingresen las notas que desee el usuario en el mismo input mostrando el número de la nota. Al fina sacar el promedio y arrojar un resultado.
//1 - 2.9 = Reprobado (rojo)
//3 - 4.4 = Notable (verde)
//4.5 - 5 = Superior (verde)
let suma = 0;
let promedio = 0;
let i=0;

document.getElementById("enviar").addEventListener("click", sumar);
document.getElementById("resultado").addEventListener("click", promediar);
let inputNota = document.getElementById("nota");
let divResult = document.querySelector(".result");
let btnReload = document.querySelector(".reload");
btnReload.addEventListener("click" , reiniciar);

function sumar() {
    divResult.innerHTML="";
    nota = parseFloat(inputNota.value);
    suma += nota;
    i++;
    limpiar();
    inputNota.placeholder=`Ingrese la nota #${(i+1)}`;
    console.log(suma);
    console.log(i);
}

function promediar(){
    promedio = suma/i;
    
    divResult.innerHTML=`<p>El promedio es: ${promedio}</p>`;

    (promedio >= 1 && promedio <3)
    ? divResult.classList.add("rojo")
    : (promedio >= 3 && promedio <5)
    ? divResult.classList.add("verde")
    : (promedio < 1 || promedio > 5)
    ? divResult.innerHTML="Los valores ingresados son erroneos."
    : divResult.innerHTML="Error;"

    btnReload.classList.add("btn-load");
    console.log(suma);
    console.log(i);

}

function limpiar(){
    inputNota.value="";
    inputNota.focus();
}

function reiniciar(){
    suma = 0;
    i = 0;
    promedio = 0;
    divResult.innerHTML="";
    divResult.classList.remove("rojo");
    divResult.classList.remove("verde");
    inputNota.placeholder="Ingrese la nota #1";
    btnReload.classList.remove("btn-load");
}
