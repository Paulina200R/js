let nt1 = document.getElementById("nota1");
let nt2 = document.getElementById("nota2");
let nt3 = document.getElementById("nota3");
let nt4 = document.getElementById("nota4");
let nt5 = document.getElementById("nota5");
let prom = document.getElementById("prom");


document.getElementById("resultado").addEventListener("click" , calcular);
document.getElementById("guardar").addEventListener("click" , save);

function calcular(){
    promedio = (parseFloat(nt1.value) + parseFloat(nt2.value) + parseFloat(nt3.value) + parseFloat(nt4.value) + parseFloat(nt5.value))/5;
    show(promedio);
}

function show(valor){
    prom.value=`${valor}`;
}