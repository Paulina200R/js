//Tipos de variables 
// let: esta variable solo se crea en la memoria cuando se lee la linea. Por esta razon, gasta menos memoria. Esta variable solo cuenta en la estructura donde se define (variable local).
// var: esta variable existe en todo el código sin importar si este ya se ha empezado a ejecutar o no. Esta variable es tomada en todo el código.
// const: el valor de esta variable se mantiene constante en todo el código, no cambia. (variable local).

//Creación de arrays

let edades = [23, 55, 23, 64, 73, 32];
document.write(edades[3]+"<br>");

//Creación de objetos

let imagen = { nombre: "imagen1", tipo: "Land Scape", valor: 343 };
document.write(imagen.tipo+"<br>");

//Creación de arrays fucionando objetos

let users = [{ nombre: "Sara", edad: 17, id: 3847 },
{ nombre: "Carla", edad: 33, id: 3837 },
{ nombre: "Pedro", edad: 37, id: 3247 }
]

document.write(users[1].edad+"<br>");

//Obtener fechas actuales

let actualYear = new Date().getFullYear();

document.write(actualYear+"<br>");

//Crear etiquetas en html desde JS. Estas etiquetas pueden ser editadas en css de la misma manera en que se hacen las que se encuentran en html.

document.querySelector("body").innerHTML=`<div>Mi año es <span>${actualYear}</span></div> <div class="imagen"><img src="img/${imagen}"></div>`
