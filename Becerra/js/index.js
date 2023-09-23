// Declaración de variables
let n1, n2, n3, prom;

// Inicialización de variables

n1 = parseFloat(prompt("Ingrese la nota #1"));//convertimos el string en número para realizar la operación. Al mismo tiempo, se pone el prompt para pedir el número por pantalla.
n2 = parseFloat(prompt("Ingrese la nota #2"));
n3 = parseFloat(prompt("Ingrese la nota #3"));
prom = (n1+n2+n3)/3;

alert(`El promedio de las notas ${n1}, ${n2}, ${n3} = ${prom}`);
