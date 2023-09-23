let nota;

document.querySelector(".boton").addEventListener("click", leer);
document.querySelector("#campo").addEventListener("keydown",teclado);
limpiar();

function teclado(e){
    (e.key === "Enter") && leer();
}

//substring(desde, hasta) //Selecciona la parte del texto que necesitamos
//toLowerCase() Minusculas
//toUpperCase() Mayusculas

function leer(){
    // nota = Number(document.querySelector("#campo").value); //Se convierte el value a entero
    nombre = document.querySelector("#campo").value.trim().toUpperCase().substring(1,4); //Elimina los espacios que se ingresen adelante y detrás del texto
    (nombre) && (document.querySelector(".caja").innerHTML=`Hola ${nombre}`);
    limpiar();
}

function limpiar(){
    const element = document.querySelector("#campo");
    element.value="";
    element.focus();
}

