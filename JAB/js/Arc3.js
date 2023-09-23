//Código para pedir cadenas de caracteres
window.onload=saludar;

let nom = "Paulina";
let num1 = 4;
let num2 = 2;
let iva = 0.19;

saludar();

escribir(calculo(num1*num2));

function saludar(){
    escribir(`Hola ${nom}`);
}

function calculo(resultado){
    let result = resultado*iva;
    let suma = num1+num2;
    return {resultado:result,suma:suma}//se estan agrupando los resultados diferente en un miso objeto para poder ser mandados. Esto se debe a que de una funcion solo se puede retornar un valor.
}

function escribir(valor){
    let primerValor = valor.resultado; //Esto se realiza para tener los diferentes resultados que manda el objeto.
    let segundoValor = valor.suma;
    document.querySelector(".caja").innerHTML=valor;
    // document.querySelector(".caja").innerHTML+=`<div>${valor}</div>`; //Se puede realizar esto para que se vean en lineas diferentes
}


