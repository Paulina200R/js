let free = false;

const ValidarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 17) {
        if (time >= 2 && time < 7 && free == false){
            alert("Podes pasar gratis");
            free = true;
        } else{
            alert(`Son las ${time} podes pasar pero tenes que pagar la entrada`);
        }
    }else {
        alert("No puedes ingresar")
    }
}

ValidarCliente(22);
ValidarCliente(2);
ValidarCliente(2);
ValidarCliente(8);