// //Codigo para mostrar caracteristicas de celulares
// class Celular {
//     constructor (color, peso, tamaño, rdc, ram){
//         this.color = color;
//         this.peso = peso;
//         this.tamaño = tamaño;
//         this.resoluciondeCamara = rdc; 
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     presionarBotonEncendido(){
//         if (this.encendido == false) {
//             alert("Celular prendido");
//             this.encendido = true;
//         }else{
//             alert("El celular ya esta encendido")
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if(this.encendido == true){
//             alert("Reiniciando celular");
//         }else {
//             alert("El celular esta apagado")
//         }
//     }
//     tomarFoto(){
//         alert(`Foto tomada con resolucion de ${this.resoluciondeCamara}`)
//     }
//     grabarVideo(){
//         alert(`Grabando video en ${this.resoluciondeCamara}`)
//     }
//     mobileInfo(){
//         return `
//         Color: <b>${this.color}</b></br>
//         Peso: <b>${this.peso}</b></br>
//         Tamaño: <b>${this.tamaño}</b></br>
//         Resolución de Video: <b>${this.resoluciondeCamara}</b></br>
//         Memoria RAM: <b>${this.memoriaRam}</b></br>
//         `;
//     }
// }

// class CelularAltaGama extends Celular{
//     constructor (color, peso, tamaño, rdc, ram, rdce){
//         super(color, peso, tamaño, rdc, ram);
//         this.resolucionDeCamaraExtra = rdce;
//     }
//     grabarVideoLento(){
//         alert("Estas grabando en camara lenta");
//     }
//     reconocimientoFacial(){
//         alert("Vamos a iniciar un reconocimiento facial");
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`
//     }
// }

// // celular1 = new Celular("Rojo", "150g", "5'", "HD", "1GB");
// // celular2 = new Celular("negro", "155g", "5.4'", "Full HD", "2GB");
// celular3 = new Celular("blanco", "150g", "5.9'", "Full HD", "1GB");

// // celular1.presionarBotonEncendido();
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1.reiniciar();
// // celular1.presionarBotonEncendido();

// celular1 = new CelularAltaGama("Rojo", "130g", "5.2", "4K", "3GB", "Full HD");
// celular2 = new CelularAltaGama("Negro", "142g", "6'", "4K", "4GB", "HD");

// document.write(
//     `${celular1.infoAltaGama()}<br><br>
//     ${celular2.infoAltaGama()}<br><br>
//     ${celular3.mobileInfo()}<br>
//     `);

// Codigo para mostrar caracteristicas apps
class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar(){
        if(this.iniciada == true){
            this.iniciada = false;
            alert("App desinstalada correctamente");
        }
    }
    abrir(){
        if(this.iniciada ==  false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

app = new App("16.000", "5 estrellas", "900mb");
app2 = new App("1.000", "4 estrellas", "400mb");
app3 = new App("6.000", "4.5 estrellas", "100mb");
app4 = new App("23.000", "4.8 estrellas", "1GB");
app5 = new App("900", "5 estrellas", "250");
app6 = new App("17", "3.7 estrellas", "522mb");
app7 = new App("42.981", "2.9 estrellas", "723mb");

document.write(`
<b>${app.appInfo()}</b></br>
<b>${app2.appInfo()}</b></br>
<b>${app3.appInfo()}</b></br>
<b>${app4.appInfo()}</b></br>
<b>${app5.appInfo()}</b></br>
<b>${app6.appInfo()}</b></br>
<b>${app7.appInfo()}</b></br>
`)

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();