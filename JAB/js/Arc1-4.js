// // document.getElementById("seccion").innerHTML=`Uno` // Solo obtiene el primer id con ese nombre.
// document.getElementsByClassName("caja")[2].innerHTML=`Linea Dos` //Se selecciona el elemento por el nombre de la clase al que queremos acceder como con los arrays.
// document.getElementsByTagName("div")[3].innerHTML=`Linea Tres` //Se selecciona el elemento por el nombre de etiqueta al que queremos acceder como con los arrays.
// // document.querySelector("#seccion").innerHTML=`Linea Cuatro` // Seleciona siempre el primer dato que encuentra. Se llaman clases con . y id con #
// document.querySelector(".caja .contenido").innerHTML=`Linea Cinco` //Estamos ingresando por un elemento a sus hijos
// document.querySelectorAll(".caja")[1].innerHTML=`Linea Seis` //Seleciona el dato indicado. Se llaman clases con . y id con #
//.length: cuenta el número de elementos de la variable que se menciona antes del punto.



// keydown: detecta cualquier tipo de teclas. En este momento solo se detecta la acción de apretar la tecla.
// keyup: detecta cualquier tipo de teclas. En este momento solo se detecta la acción de levantar la tecla.
// keypress: detecta las teclas que escriben algún tipo de caracter. Diferencia ente min y MAY. detecta cualquier tipo de teclas. En este momento solo se detecta la acción de escribir la tecla.

// document.querySelector(".campo").addEventListener("keydown", teclado);

// function teclado(){
//     alert("keydown")
// }

// document.querySelector(".campo").addEventListener("keyup", teclado);

// function teclado(){
//     alert("keyup")
// }

// document.querySelector(".campo").addEventListener("keypress", teclado);

// function teclado(){
//     alert("keypress")
// }

document.querySelector(".campo").addEventListener("keydown", teclado);

function teclado(e){
    console.log(">>"+e.keyCode); //Para detectar el código de la letra
    console.log(">>"+e.key); //Para detectar el nombre de la letra
    (e.key==="Enter") // Para poner condicional del nombre de la tecla
    && (e.type==="keydown") //Permite poner la acción sin una acción por falso
    ? document.querySelector(".campo").style.backgroundColor="blue"
    : document.querySelector(".campo").style.backgroundColor="purple"
}
