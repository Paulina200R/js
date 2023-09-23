let nota = 5

showResul(nota)
valorar(nota)

function valorar(valor){

    (valor >= 9 && valor <= 10)
    ? showNota(`Excelente`)
    : (valor >=7 && valor < 9)
    ? showNota(`Notable`)
    : (valor >=5 && valor <7)
    ? showNota(`Aprobado`)
    : (valor < 5 && valor >= 0)
    ? showNota(`Suspendido`)
    : (valor < 0 || valor > 10)
    ? showNota(`No te flipes`)
    : showNota(`Error`)
}

function showResul(msg){
    let boxResul = document.querySelector(".resultado");
    (msg >= 5 && msg <= 10)
    ? boxResul.innerHTML=`¡Has Aprobado!`
    : boxResul.innerHTML=`¡Has suspendido!`

    color(msg)

    function color(order){
        (order >= 5 && order <= 10)
        ? boxResul.style.backgroundColor="green"
        : boxResul.style.backgroundColor="red"
    }
}


function showNota(valid){
    let boxNota = document.querySelector(".nota");
    boxNota.innerHTML=`${valid}`
}