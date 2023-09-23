let caja = document.querySelector(".contenedor");

caja.innerHTML=1;
caja.innerHTML+=2; //Se ven los dos valores porque se estan sumando en la cadena de "caracteres el valor anteriormente mostrado."

function mostrar(num){//Se esta creando una función para mostrar. Esta función dejara ver al mismo tiempo los resultados anteriores.
    caja.innerHTML+=`<div>Número a mostrar: ${num}</div>`
}

mostrar(45);


//Operadores ternarios

let nombre = "JAB";

(nombre === "JAB") //Condición.
? mostrar("Soy JAB") //Acción que se realiza si es true.
: mostrar("No soy JAB") //Acción que se realiza si es false.


let vivo = true;

(!vivo) //Se invierte el valor. Por esto, es false.
? mostrar("Vivo")
: mostrar("Muerto")