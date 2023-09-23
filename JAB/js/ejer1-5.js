let nom;
let rep = 0;
let i = 0;
let nombre;

document.getElementById("nombre").addEventListener("keydown", teclado);
document.querySelector(".boton").addEventListener("click", verify);

function teclado(e){
    e.key === "Enter" && verify();
}

function verify() {
    (rep === 1)
        ? leer()
        : agregar()
    rep = 1;
}

function limpiar() {
    nom = document.querySelector("#nombre").value = "";
    document.querySelector("#nombre").focus();
}

function leer() {
    nom = document.querySelector("#nombre").value.trim();
    let nom2 = convertir(nom);
    document.querySelector(".opciones").innerHTML += `
    <option id="op${i++}">${nom2}</option>
    `;
    limpiar();
}

function agregar() {
    nom = document.querySelector("#nombre").value.trim();
    let nom2 = convertir(nom);
    document.querySelector(".resultado").innerHTML = `
      <select id="opciones" class="opciones">
      <option>Nombres</option>
      <option id="op${i++}">${nom2}</option>
      </select>
      `;
    limpiar();

    document.getElementById("opciones").addEventListener("change", imprimir);
}

function imprimir() {
    nombre = document.getElementById("opciones").value;
    document.querySelector(".resultado").innerHTML+=`<div>Hola ${nombre}</div>`
}

function convertir(nombre) {
    let convNom = `${nombre.substring(0, 1).toUpperCase()}${nombre.substring(1).toLowerCase()}`;
    return convNom;
}