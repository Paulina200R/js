// parrafo = document.getElementById("parrafo"); //obtener elemento por id
// parrafo = document.getElementsByTagName("p"); //obtener elemento por etiqueta
// parrafo = document.querySelector(".parrafo"); //obtener el elemento por clases
// parrafo = document.querySelectorAll(".parrafo"); //obtener el elemento por clases

// document.write(parrafo);
// document.write(parrafo[1]);



// const rangoEtario = document.querySelector(".rangoEtario");

// rangoEtario.setAttribute("type","text")//se modifica o agrega el tipo (type) y luego se pone a lo queb se desea cambiar.
// valorDelAtributo = rangoEtario.getAttribute("type"); //se obtine el atributo
// valorDelAtributo = rangoEtario.removeAttribute("type"); //se remueve el atributo

// document.write("<br>Valor: " + valorDelAtributo); // muestra el valor del atributo que obtuvimos anteriormente con el getAttribute



// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("contentEditable","true") //deja modificar el texto al usuario. Si se cambia por false, es lo contrario.

// titulo.setAttribute("dir","rtl") //deja modificar la direccion del texto. rtl: right to left y ltr: left to right.

// titulo.setAttribute("hidden","false") // deja modificar la visibilidad del elemento

// titulo.setAttribute("tabindex","3")

// titulo.setAttribute("tittle","emmm...")



// const input = document.querySelector(".input-normal");

// document.write(input.className + "<br>");//muestra el atributo clase
// document.write(input.value + "<br>");//muestra el atributo value
// document.write(input.type = "range" + "<br>");//muestra el atributo tipo
// //Se puede poner de la siguiente manera:
// input.type = "file"; // cambia el atributo tipo
// input.accept = "image/png" //cambia el atributo para aceptar archivos
// input.minLength = 4; //se refiere a la mínima cantidad de caracteres que requiere un input
// input.placeholder = "Puedes?" //cambia el placeholder
// input.required = " "; //con el espacio se refiere a que el campo debe ser completado



// const titulo = document.querySelector(".titulo");

// titulo.style.color = "blue";
// titulo.style.backgroundColor = "black";
// titulo.style.borderRadius = "15px";
// titulo.style.height = "60px";



// const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande"); // le añade otro nombre a la clase existente. Se puede usar para activar una clase existente en el css que no sea visible desde el principio
// titulo.classList.remove("grande"); // elimina una clase existente. Se puede usar para desactivar una clase existente en el css que sea visible desde el principio
// titulo.classList.contains("grandeee") // obtiene las clases que se encuentran en el elemento. Devuelve valores booleanos.
// titulo.classList.toggle("grande") //en caso de que la clase exista, el metodo la elimina y viceversa.
// titulo.classList.toggle("grande", false)  // si queremos que siempre la saque se debe poner false. Por el contrario, se pone true
// titulo.classList.replace("grande", "chico") //reemplaza las clases



// const titulo = document.querySelector(".titulo");

// let resultado = titulo.textContent; //nos devuelve el valor dentro de una etiqueta.
// let resultado = titulo.innerText; //nos devuelve el valor dentro de una etiqueta. Solo muestra lo que el desarrollador desea mostrar. (NO SE USA)
// let resultado = titulo.innerHTML; //se muestra con alert para poder ver el html
// let resultado = titulo.outerHTML; // se muestra con alert para ver el html y todos los atributos del html.


// document.write(resultado);

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI");
// const textoDelItem = document.createTextNode("Este es un item")

// item.innerHTML = textoDelItem;

// console.log(item);



// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI");
// const textoDelItem = document.createTextNode("Este es un item")

// item.appendChild(textoDelItem);

// console.log(item);



// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.firstElementChild;

// console.log(primerHijo); 