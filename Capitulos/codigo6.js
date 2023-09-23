const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","pedro", "pepito" , "cofla", "maria"],
        programacion: ["Dalto","pedro", "pepito" , "cofla", "maria"],
        quimica: ["Hernandez","pedro", "pepito" , "cofla", "maria"],
        logica: ["Rodriguez","pedro", "pepito" , "cofla", "maria"],
    }

    if (materias[materia] != undefined){
        return [materias[materia],materia];
    }else {
        return false;
    }
}

let informacion = obtenerInformacion("fisica");
if (informacion != false){
    let profesor = obtenerInformacion("fisica")[0][0];
    alumnos = obtenerInformacion("fisica")[0];
    alumnos.shift();
    document.write(`El profesor de: ${informacion[1]} es: ${profesor} y los alumnos son: ${alumnos}`)
}