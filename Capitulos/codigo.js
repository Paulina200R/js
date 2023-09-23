// //Codigo para realizar preguntas y guardar variables
// let nombre = prompt("Escribe tu nombre");

// document.write("Este es tu nombre: " + nombre);

// //Codigo de operadores (mayor y menor que / es igual(==) es distinto(!=))
// let numero = 23;
// let numero1 = 26;

// let texto = "CLP";
// let texto1= "CLP";

// document.write(numero > numero1);

// document.write(texto != texto1);

// //Codigo de operador true and false para operadores (&&(si ambas son true = true))
// num = 12;
// num1 = 24;

// afirmacion = num < num1;
// afirmacion1 = num != num1;

// document.write(afirmacion && afirmacion1)

// //Codigo de operador true and false para operadores (||(si cualquiera es true = true))
// num = 12;
// num1 = 24;

// afirmacion = num > num1; //no se cumple
// afirmacion1 = num != num1; //se cumple

// document.write(afirmacion || afirmacion1)

// //Codigo de operador true and false para operadores (!(convierte true en false))
// num = 12;
// num1 = 24;

// afirmacion = num < num1; 
// afirmacion1 = num != num1; 

// document.write(!afirmacion)//como ambas afirmaciones anteriores se cumplen la afirmacion es falsa

// //Codigo para mezclar operadores
// num = 12;
// num1 = 24; 

// document.write(num < num1 || num == num1)//si num es menor a num1 o num es igual a num1, la afirmacion es true

// //Codigo 2 para mezclar operadores
// num = 12;
// num1 = 24;
// num2 = 25;
// num3 = 92;
// num4 = 91;

// op = (num < num1 || num1 < num2) && (!(num != num1) && num4 != num2);//(num es menor a num1 o num1 es menor a num2) (el contrario de (num es distinto a num1) num4 es distinto a num2) = (true || true) && (false && true) = true && false = false 

// document.write(op);

// //Codigo con condicionales para pedir registro (variables)

// C = prompt("Ingrese su contraseña")

// if (C == "123") {
//     alert("Ha ingresado correctamente al sistema")
// }
// else {
//     alert("No ha ingresado correctamente al sistema")
// }

// //Codigo con condicionales para pedir registro (variable y else if)
// C = prompt("Ingrese su contraseña")

// if (C == "123") {
//     alert("Ha ingresado correctamente al sistema")
// }
// else if (C == "1234") {
//     alert("Ha ingresado correctamente al sistema")
// }
// else {
//     alert("No ha ingresado correctamente al sistema")
// }

// //Codigo con condicionales para pedir registro (constante)
// C = "12345"

// if (C == "123") {
//     alert("Ha ingresado correctamente al sistema")
// }
// else if (C == "1234") {
//     alert("Ha ingresado correctamente al sistema")
// }
// else if (C == "12345") {
//     alert("Ha ingresado correctamente al sistema")
// }
// else {
//     alert("No ha ingresado correctamente al sistema")
// }

// //Codigo con condicionales para pedir registro con &&
// N = prompt("Escriba su nombre")
// A = prompt("Escriba su apellido")

// if (N == "Paulina" && A == "Ramirez") {
//     alert("Ha ingresado correctamente al sistema")
// }
// else {
//     alert("No ha ingresado correctamente al sistema")
// }

// //Codigo con condicionales para pedir registro con ||
// N = prompt("Escriba su nombre")
// A = prompt("Escriba su apellido")

// if (N == "Paulina" || A == "Ramirez") {
//     alert("Ha ingresado correctamente al sistema")
// }
// else {
//     alert("No ha ingresado correctamente al sistema")
// }

// //Codigo con arrays para nombrar un elemento
// frutas = ["banana","manzana","pera",5,9,"Pedro"];

// document.write(frutas[3])

// //Codigo con arrays asociativos
// let pc1 = { //Con este bloque se menciona el dato a partir del nombre
//     nombre: "DaltoPC",
//     procesador: "Intel Core i7",
//     space: "   ",
//     ram: "16GB",
//     espacio: "1TB"
// }

// let pc2 = ["DaltoPC","Intel Core i7","16GB","1TB"]; //Con este array se meciona el dato a partir del numero de posicion

// document.write(pc1["procesador"])
// document.write(pc1["space"])
// document.write(pc2[2])

// //Codigo con arrays asociativos definidos
// let pc1 = { //Con este bloque se menciona el dato a partir del nombre
//     nombre: "DaltoPC",
//     procesador: "Intel Core i7",
//     space: "   ",
//     ram: "16GB",
//     espacio: "1TB"
// }

// let nombre = pc1["nombre"]
// let procesador = pc1["procesador"]
// let ram = pc1["ram"]
// let espacio = pc1["espacio"]

// frase = `El nombre de mi PC es: <b>${nombre}</b><br>
//          El procesador de mi PC es: <b>${procesador}</b><br>
//          La memoria ram de mi PC es: <b>${ram}</b><br>
//          El espacio de mi PC es: <b>${espacio}</b>`;

// document.write(frase);

// //++ para sumar uno

////Con el if, si se cumple la condicion se sigue con el programa (codigo)
////Con el while, si se cumple la funcion se vuelve a repetir el programa (codigo) hasta que la funcion se vuelva false y se salga del bucle
////Con el do while, primero se realiza la accion y luego se pregunta la condicion, significa que se realiza por primera vez la accion y si se sigue cumpliendo se vuelva a realizar pero si es falsa solo se ejecuta una vez
////Con el for, definimos "i" le ponemos una condicion y por el ultimo le agregamos los parametros a cumplir para que "i" cambie
////Con el for in, la variable es igual al numero de posicion del dato del array en orden, para mostrar el nombre con este se debe mencionar el nombre del array (datos[dato])
////Con el for of, la variable es igual al nombre de cada uno de los datos del array en orden
////Con el label, podemos relacionar un bucle a un nombre
////Con el function, podemos guardar una funcion con un nombre para luego solo mencionar el nombre para que se ejecute el codigo
// //Codigo para sumar +1 al numero anterior en un bucle simple de while
//// Matriz bidimencional = array dentro de un array

// let numero = 0; 

// while (numero <= 10){

//     numero++;

//     document.write(numero + "<br>");
// }

// //Codigo con do while
// let numero = 0; 

// do{
//     document.write(numero + "<br>");
//     numero++;
// }

// while(numero <= 10)

// //Codigo con while y if para romper el bucle (break)
// let numero = 0;

// while(numero < 100) {
//     numero++;
//     document.write(numero);
//     if (numero == 30) {
//         break;
//     }
// }

// //Codigo con for para realizar resta de -1 a partir de 6 mientras se va repitiendo el bucle hasta llegar a cero
// let i;

// for (i = 6; i >= 0; i--) {

//     document.write(i + "<br>")
// }

// document.write(i);

// //Cuando definimos la "misma" variable o constante fuera del bucle va a ser diferente a la que hay dentro del bucle
// let i = 20;

// for (let i = 0; i < 6; i++) {

//     document.write(i + "<br>")
// }

// //Codigo con for y break (corta con la accion)
// for (let i = 0; i < 20; i++) {
//     if (i == 15) {
//         break;
//     }
//     document.write(i + "<br>");
// }

// //Codigo con for y continue (este se salta el paso al que es igual pero continua con el resto)
// for (let i = 0; i < 20; i++) {
//     if (i == 15) {
//         continue;
//     }
//     document.write(i + "<br>");
// }

// //Codigo con for in 
// let animales = ["gato","perro","tiranosaurio rex"];

// for (animal in animales){
//     document.write(animal + "<br>")
// }

// document.write("<br>")

// for (animal of animales){
//     document.write(animal + "<br>")
// }

// //Codigo con for, if y break (cuando array = 2, se para ese array y escribe solo un dato del array1 y continua con el array2)
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1, "josefina"];

// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
//             document.write(array + "<br>")
//             break;
//         }
//     }
//     else {
//         document.write (array + "<br>")
//     }
// }
// document.write ("<br>")

// //Codigo con for, if y continue (cuando array = 2, se para ese array y escribe el array1 y CONTINUA con el array2)
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1,"josefina"];

// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
//             document.write(array + "<br>")
//             continue;
//         }
//     }
//     else {
//         document.write (array + "<br>")
//     }
// }

// //Codigo con for, if y continue (cuando array = 2, se para ese array y escribe el array1 y CONTINUA con el array2 (en este se ven los nombres y no numeros debido a que estamos mencionando el array en else))
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1,"josefina"];

// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
//             document.write(array + "<br>")
//             continue;
//         }
//     }
//     else {
//         document.write (array2[array] + "<br>")
//     }
// }

// //Codigo con label y break (cuando array = 2, se para ese array y escribe el primer dato de array1 y para con el bucle desde el comienzo(en este se ven los nombres y no numeros debido a que estamos mencionando el array en else))
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1,"josefina"];

// forRancio:
// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
//             document.write(array + "<br>")
//             break forRancio;
//         }
//     }
//     else {
//         document.write (array2[array] + "<br>")
//     }
// }

// //Codigo con label y continue (cuando array = 2, se para ese array y escribe el primer dato de array1 y continua con el resto de datos del array 2(en este se ven los nombres y no numeros debido a que estamos mencionando el array en else))
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1,"josefina",];

// forRancio:
// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
//             document.write(array + "<br>")
//             continue forRancio;
//         }
//     }
//     else {
//         document.write (array2[array] + "<br>")
//     }
// }

// //Codigo con label y continue (cuando array = 2, se para ese array y NO escribe el primer dato de array1 ya que el continue se encuentra antes del document.write pero si continua con el array2)
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1,"josefina",];

// forRancio:
// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
//             continue forRancio;
//             document.write(array + "<br>")
//         }
//     }
//     else {
//         document.write (array2[array] + "<br>")
//     }
// }

// //Codigo con label y break (cuando array = 2, se para ese array y NO escribe el primer dato de array1 ya que el break se encuentra antes del document.write)
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1,"josefina",];

// forRancio:
// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
//             break forRancio;
//             document.write(array + "<br>")
//         }
//     }
//     else {
//         document.write (array2[array] + "<br>")
//     }
// }

// //Codigo con label y continue (cuando array = 2, se va a comenzar a ejecutar el array1, pero si el array = "Maria" se salta el dato y continua con el array1 y el array2)
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1,"josefina",];

// forRancio:
// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
            
//             if (array == "Maria"){
//                 continue;
//             }
//             document.write(array + "<br>")
//         }
//     }
//     else {
//         document.write (array2[array] + "<br>")
//     }
// }

// //Codigo con label y continue (cuando array = 2, se va a comenzar a ejecutar el array1, pero si el array = "Maria" se salta ese array y continua con el array2)
// array1 = ["Maria","Josefa","Roberta"];
// array2 = ["Pedro","Marcelo",array1,"josefina",];

// forRancio:
// for (let array in array2){

//     if (array == 2) {
//         for (let array of array1){
            
//             if (array == "Maria"){
//                 break;
//             }
//             document.write(array + "<br>")
//         }
//     }
//     else {
//         document.write (array2[array] + "<br>")
//     }
// }

// //Codigo con function
// function saludar (){
// respuesta = prompt("Hola, ¿Como fue tu dia?")

// if (respuesta == "bien"){
//     alert("Me alegro");
// }
// else{
//     alert("Que pena");
// }
// }

// saludar()
// saludar()
// saludar()

// //Codigo con function y return para admitir ingreso por edad
// function saludar(){
//     let num = prompt ("Ingresa tu edad");
//     if (num > 17){
//         return alert ("Ingreso admitido");
//     }
//     else{
//         alert ("No puedes ingresar al sistema")
//     }
// }

// let num = saludar()
// document.write(num)

// //Codigo con function y parametros para cambiar los valores en cada function (el valor de la variable solo funciona dentro de la misma debido a que fue alli donde se definio)
// function suma(num1,num2){
//     let res = num1 + num2;
//     document.write(res);
//     document.write("<br>")
// }

// suma(10,5)
// suma(10,6)
// suma(11,6)

// //Codigo con function y parametros para saludar
// function saludar(nombre){
//     let frase = `hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
//     document.write("<br>")
// }

// saludar ("Pedro")
// saludar("Paulina")
// saludar("Sara")

// //Codigo con function y parametros para saludar
// function saludar(nombre){
//     let frase = `hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
//     document.write("<br>")
// }

// //Codigo con function, const y parametros para saludar
// const saludar = function(nombre){
//     let frase = `Hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
//     document.write("<br>")
// }

// saludar("Sara");

// //Codigo con function, const, flechita y parametros para saludar (si solo se usa un parametro no es necesario ponerle parentesis)
// const saludar = (nombre)=>{
//     let frase = `Hola ${nombre}! ¿Como estas?`;
//     document.write(frase);
// }

// saludar("Sara");

// //Codigo con function, const, flechita y parametros para saludar simplificada

// const saludar = nombre => document.write("Hola, ¿Como estas? " + nombre);

// saludar("Sara");

// //Codigo con return y if para devolver una operacion escogida
// const suma = (num1,num2)=>{
//     return parseInt(num1) + parseInt(num2);
// }
// const resta = (num1,num2)=>{
//     return parseInt(num1) - parseInt(num2);
// }
// const multiplicar = (num1,num2)=>{
//     return parseInt(num1) * parseInt(num2);
// }
// const division = (num1,num2)=>{
//     return parseInt(num1) / parseInt(num2);
// }

// alert("¿Que operacion deseas realizar?");
// let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division");

// if (operacion == 1){
//     let numero1 = prompt("Primer numero para sumar");
//     let numero2 = prompt("Segundo numero para sumar");
//     resultado = suma(numero1, numero2)
//     alert(`El resultado de la operacion es: ${resultado}`);
// }
// else if (operacion == 2){
//     let numero1 = prompt("Primer numero para restar");
//     let numero2 = prompt("Segundo numero para restar");
//     resultado = resta(numero1, numero2)
//     alert(`El resultado de la operacion es: ${resultado}`);
// }
// else if (operacion == 3){
//     let numero1 = prompt("Primer numero para multiplicar");
//     let numero2 = prompt("Segundo numero para multiplicar");
//     resultado = multiplicar(numero1, numero2)
//     alert(`El resultado de la operacion es: ${resultado}`);
// }
// else if (operacion == 4){
//     let numero1 = prompt("Primer numero para dividir");
//     let numero2 = prompt("Segundo numero para dividir");
//     resultado = division(numero1, numero2)
//     alert(`El resultado de la operacion es: ${resultado}`);
// }
// else {
//     alert ("No se ha encontrado una operacion por ese nombre");
// }

// //Codigo orientado a objetos con clase (se usa const en vez de let)
// class animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de colo ${this.color}.`;
//     }
//     verInfo =()=>{
//         document.write(this.info + "<br>")
//     }
// }

// let perro = new animal("perro", "5", "marron");
// let gato = new animal("gato", "3", "negro");
// let pajaro = new animal("perro", "2", "amarillo");

// // document.write (perro.info + "<br>");
// // document.write (gato.info + "<br>");
// // document.write (pajaro.info + "<br>");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// //Codigo orientado a objetos, if y else (no se puede tener un objetro con el mismo nombre de la clase)
// class Animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
//     }
//     verInfo =()=>{
//         document.write(this.info + "<br>")
//     }
//     ladrar (){
//         if (this.especie == "perro"){
//             document.write("¡Wow!, ladra ya que es un perro" + "<br>")
//         }else {
//             document.write("No puede ladrar, ya que es un " + this.especie + "<br>")
//         }
//     }
// }

// class Perro extends Animal {
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color); //Para agragar de la clase anterior
//         this.raza = raza;
//     }
//     static ladrar(){//Se crea para ejecutar la informacion dentro, antes de crear el objeto
//         alert("Wow")
//     }
// }

// let perro = new Perro ("perro", "5", "marron", "doberman");
// let gato = new Animal("gato", "3", "negro");
// let pajaro = new Animal("perro", "2", "amarillo");

// perro.ladrar();
// gato.ladrar();
// pajaro.verInfo();

// //Codigo orientado a objetos, if y else 
// class Animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
//     }
//     verInfo =()=>{
//         document.write(this.info + "<br>")
//     }
// }

// class Perro extends Animal {
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color); //Para agragar de la clase anterior
//         this.raza = null;
//     }
//     modificarRaza(){//Se crea para modificar, antes de crear el objeto
//         this.raza = "pedro";
//     }
// }

// let perro = new Perro ("perro", 5, "marron", "doberman");
// let gato = new Animal("gato", 3, "negro");
// let pajaro = new Animal("perro", 2, "amarillo");

// perro.modificarRaza();
// document.write(perro.raza);

// //Codigo orientado a objetos, if y else 
// class Animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}.`;
//     }
//     verInfo =()=>{
//         document.write(this.info + "<br>")
//     }
// }

// class Perro extends Animal {
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color); //Para agragar de la clase anterior
//         this.raza = null;
//     }
//     set modificarRaza(newName){//Se crea para modificar con metodo pero se toma como propiedad, antes de crear el objeto
//         this.raza = newName;
//     }

//     get getRaza(){//Se usa para obtener el valor
//         return this.raza;
//     }
// }

// let perro = new Perro ("perro", 5, "marron", "doberman");
// let gato = new Animal("gato", 3, "negro");
// let pajaro = new Animal("perro", 2, "amarillo");

// perro.modificarRaza = "Pedro";
// document.write(perro.getRaza);


// // Codigo con concat para concatenar informacion de dos cadenas diferentes (con el string, se crea un objeto que se convierte lo que se encuentra dentro del parentesis)
// let cadena = new string ("cadena de prueba ");
// let cadena2 = "cadena "

// resultado = cadena.concat(cadena2);
// document.write(resultado);

// // Codigo con startsWith para concatenar informacion de dos cadenas diferentes (con el startsWith, se evalua si la primer cadena comienza con el contenido de la segunda, el resultado es una variable booleana)
// let cadena = "cadena de prueba ";
// let cadena2 = "cadena"

// resultado = cadena.startsWith(cadena2);
// document.write(resultado);

// // Codigo con endsWith para concatenar informacion de dos cadenas diferentes (con el endsWith, se evalua si la primer cadena termina con el contenido de la segunda, el resultado es una variable booleana)
// let cadena = "cadena de prueba ";
// let cadena2 = "cadena"

// resultado = cadena.endsWith(cadena2);
// document.write(resultado);

// // Codigo con includes para concatenar informacion de dos cadenas diferentes (con el includes, se evalua si la primer cadena contine contenido de la segunda, el resultado es una variable booleana)
// let cadena = "cadena de prueba ";
// let cadena2 = "cadena"

// resultado = cadena.includes(cadena2);
// document.write(resultado);

// // Codigo con indexOf para concatenar informacion de dos cadenas diferentes (con el indexOf, se ingresa un numero y este nos devuelve el dato que se encuentra en esta posicion (comenzando desde cero)(Si el codigo devuelve un -1 significa que el dato no se encuentra en la cadena))
// let cadena = "pedro es un tarado inmaduro";
// let cadena2 = "";

// resultado = cadena.indexOf("tarado");
// document.write(cadena[2]);

// // Codigo con lastIndexOf para concatenar informacion de dos cadenas diferentes (con el indexOf, se ingresa un numero o palabra y este nos devuelve el dato o la posicion en la que se encuentra en esta posicion (comenzando desde cero, aun asi, el lastIndexOf siempre escogera el ultimo dato que se encuentre nombrado de esa manera)
// let cadena = "pedro es un tarado inmaduro inmaduro inmaduro";
// let cadena2 = "";

// resultado = cadena.lastIndexOf("inmaduro");
// document.write(resultado);

// // Codigo con lastIndexOf para concatenar informacion de dos cadenas diferentes (con el indexOf, se ingresa un numero o palabra y este nos devuelve el dato o la posicion en la que se encuentra en esta posicion (comenzando desde cero, aun asi, el lastIndexOf siempre escogera el ultimo dato que se encuentre nombrado de esa manera)
// let cadena = "pedro es un tarado inmaduro inmaduro inmaduro";
// let cadena2 = "";

// resultado = cadena.lastIndexOf("inmaduro");
// document.write(cadena[37] + cadena[38] + cadena[39] + cadena[40] + cadena[41] + cadena[42] + cadena[43] + cadena[44]);

// // Codigo con padStart para concatenar informacion de dos cadenas diferentes (con el padStart, se ingresa un numero y el dato que queremos agregar, de esta manera, el numero sera el numero total de caracteres que tendra la cadena contando los que ya se encontraban alli)
// let cadena = "abc";
// let cadena2 = "";

// resultado = cadena.padStart(6,"a");
// document.write(resultado);

// // Codigo con padEnd para concatenar informacion de dos cadenas diferentes (con el padStart, se ingresa un numero y el dato que queremos agregar, de esta manera, el numero sera el numero total de caracteres que tendra la cadena contando los que ya se encontraban alli, en este caso los carecteres nuevos se agregaran al final)
// let cadena = "abc ";
// let cadena2 = "";

// resultado = cadena.padEnd(10,"c");
// document.write(resultado);

// // Codigo con padEnd para concatenar informacion de dos cadenas diferentes (con el repeat se se ingresa el numero de veces que queremos repetir la cadena)
// let cadena = "abc ";
// let cadena2 = "";

// resultado = cadena.repeat(10);
// document.write(resultado);

// //Codigo con split, este nos permite dividir los datos de la cadena con el signo especificado despues del split y poner la posicion del dato para que sea mostrada (se puede separar por espacios)
// let cadena = "abc/ holaa/ como/ va";

// resultado = cadena.split("/");
// document.write(resultado[2]);

// //Codigo con substring, este nos permite mostrar los datos de la cadena desde y hasta la posicion que ingresamos despues del substring
// let cadena = "ABCDEFG";

// resultado = cadena.substring(0,2);
// document.write(resultado);

// //Codigo con toLowerCase, este nos permite mostrar los datos de la cadena en minuscula
// let cadena = "ABCDEFG";

// resultado = cadena.toLowerCase();
// document.write(resultado);

// //Codigo con toUpperCase, este nos permite mostrar los datos de la cadena en mayuscula
// let cadena = "abcdefg";

// resultado = cadena.toUpperCase();
// document.write(resultado);

// //Codigo con toString, este nos permite mostrar la operacion matematica entre la cadena y los mandos del document.write
// let cadena = 50;
// let resultado = cadena.toString(); 

// document.write(2 * resultado, "<br>");
// document.write(2 + resultado); //Solo se le agrega el texto como normalmente es en Java

////Código con pop, este nos permite remover el último dato del arreglo y mostrarlo
//let nombres = ["pedro" , "maría" , "jorge"];

//document.write(nombres + "<br>")
//let resultado = nombres.pop()

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con shift, este nos permite remover el primer dato del arreglo y mostrarlo
//let nombres = ["pedro" , "maría" , "jorge"];

//document.write(nombres + "<br>")
//let resultado = nombres.shift()

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con push, este nos permite agregar un dato al arreglo al final de la lista y devuelve la nueva longitud del array
//let nombres = [" pedro" , " maría" , " jorge"];

//document.write(nombres + "<br>")
//let resultado = nombres.push(" daniel ")

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con reverse, este nos permite invertir los datos del arreglo
//let nombres = ["pedro" , "maría" , "jorge"];

//document.write(nombres + "<br>")
//let resultado = nombres.reverse()

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con unshift, este nos permite agregar un dato al arreglo al inicio de la lista y devuelve la nueva longitud del array
//let nombres = ["pedro" , "maría" , "jorge"];

//document.write(nombres + "<br>")
//let resultado = nombres.unshift("daniel")

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con sort, este nos permite ordenar los datos del arreglo en orden alfabetico o numérico
//let nombres = ["Arcangel" , "eladio" , "coscu" ,"anuel"];

//document.write(nombres + "<br>")
//let resultado = nombres.sort()

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con splice, este nos permite cambiar el contenido de un array, ya sea eliminando o agregando nuevos elementos (se muestran los datos desde la primer posicion establecida hasta la segunda, para agregar solo se pone en el parentesis)
//let nombres = ["Arcangel" , "eladio" , "coscu" ,"anuel"];

//document.write(nombres + "<br>")
//let resultado = nombres.splice(1,3, " CANSERBERO")

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con join, este nos permite convertir el array en una cadena de texto
//let nombres = ["Arcangel" , "eladio" , "coscu" ,"anuel"];

//document.write(nombres[1] + "<br>")
//let resultado = nombres.join(" - ")

//document.write(resultado + "<br>");
//document.write(nombres[1])

////Código con slice, este nos permite devolver una parte del array dentro de uno nuevo sin el final incluido
//let nombres = ["Arcangel" , "eladio" , "coscu" ,"anuel"];

//document.write(nombres + "<br>")
//let resultado = nombres.slice(0, 2)

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con icludes, este nos permite valorar si un dato se encuntra en el array devolviendo un dato booleano
//let nombres = ["Arcangel" , "eladio" , "coscu" ,"anuel"];

//document.write(nombres + "<br>")
//let resultado = nombres.includes("Arcangel")

//document.write(resultado + "<br>");
//document.write(nombres)

////Código con filter, este nos permite crear un nuevo array con todos los elementos que cumplan la condición
//let numeros = [" Arcangel" , "tres" , " eladio" , " coscu" ," anuel", " dos" , " CANSERBERO", " uno"];

//resultado = numeros.filter(numero => numero.length > 4)

//document.write(resultado)

// numero = Math.max(1,4,6,4,6,3,9,2,4);//Escoge el número máximo
// num = Math.min(4,6,4,6,3,9,2,4);//Escoge el número minimo
// numer = Math.random()*100; //La manera dificil de escoger un número aleatorio
// numer = numer.toString(); // Convertir el número a string 
// nume = numer[0] + numer[1]; //Convertir el número a entero
// if (numer[1] == "."){
//     nume = numer[0];
// }
// n = Math.random()*100; //La manera facil de redondear el número aleatorio
// n = Math.round(n);
// let valor = Math.random()*99;//Se quita la posibilidad de que salga cero debido a que se le suma uno para que cero sea imposible, y se le pone 99 para que no llegue a 100
// valor = Math.floor(valor+1);
// let val = Math.fround(9.37873563895763875687593658457637486487635864873458762846587947) //Redondea el número
// let valo = Math.trunc(9.4)
// let pi = Math.PI;

// // // // // // document.write(numero);
// // // // // // document.write(num);
// // // // // document.write(nume)
// // // // document.write(n);
// // // document.write(valor);
// // document.write(val)
// // document.write(valo)
// document.write(pi)
