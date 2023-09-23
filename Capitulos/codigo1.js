//Codigo para pedir cantidad de dinero a tres personas, decirles lo que se pueden comprar y cuanto es la devuelta
//Con el if, si se cumple la condicion se sigue con el programa (codigo)
dineroCofla = prompt("Cofla escriba su monto de dinero");
dineroPedro = prompt("Pedro escriba su monto de dinero");
dineroRober = prompt("Rober escriba su monto de dinero");

dineroCofla = parseInt(dineroCofla);
dineroPedro = parseInt(dineroPedro);
dineroRober = parseInt(dineroRober);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla Comprarse paleta de agua")
    alert("Te sobran: " + (dineroCofla - 0.6))
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla Comprarse helado de crema")
    alert("Te sobran: " + (dineroCofla - 1))
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla Comprarse helado heladix")
    alert("Te sobran: " + (dineroCofla - 1.6))
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla Comprarse helado heladovich")
    alert("Te sobran: " + (dineroCofla - 1.7))
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla Comprarse helado de helardo")
    alert("Te sobran: " + (dineroCofla - 1.8))
}
else if (dineroCofla >= 2.9) {
    alert("Cofla Comprarse helado con confites o el pote de 1/4kg")
    alert("Te sobran: " + (dineroCofla - 2.9))
}
else {
    alert("Cofla Lo sentimos, no es posible comprar alguna de las opciones")
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro Comprarse paleta de agua")
    alert("Te sobran: " + (dineroPedro - 0.6))
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro Comprarse helado de crema")
    alert("Te sobran: " + (dineroPedro - 1))
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro Comprarse helado heladix")
    alert("Te sobran: " + (dineroPedro - 1.6))
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro Comprarse helado heladovich")
    alert("Te sobran: " + (dineroPedro - 1.7))
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro Comprarse helado de helardo")
    alert("Te sobran: " + (dineroPedro - 1.8))
}
else if (dineroPedro >= 2.9) {
    alert("Pedro Comprarse helado con confites o el pote de 1/4kg")
    alert("Te sobran: " + (dineroPedro - 2.9))
}
else {
    alert("Pedro Lo sentimos, no es posible comprar alguna de las opciones")
}

if (dineroRober >= 0.6 && dineroRober < 1) {
    alert("Rober Comprarse paleta de agua")
    alert("Te sobran: " + (dineroRober - 0.6))
}
else if (dineroRober >= 1 && dineroRober < 1.6) {
    alert("Rober Comprarse helado de crema")
    alert("Te sobran: " + (dineroRober - 1))
}
else if (dineroRober >= 1.6 && dineroRober < 1.7) {
    alert("Rober Comprarse helado heladix")
    alert("Te sobran: " + (dineroRober - 1.6))
}
else if (dineroRober >= 1.7 && dineroRober < 1.8) {
    alert("Rober Comprarse helado heladovich")
    alert("Te sobran: " + (dineroRober - 1.7))
}
else if (dineroRober >= 1.8 && dineroRober < 2.9) {
    alert("Rober Comprarse helado de helardo")
    alert("Te sobran: " + (dineroRober - 1.8))
}
else if (dineroRober >= 2.9) {
    alert("Rober Comprarse helado con confites o el pote de 1/4kg")
    alert("Te sobran: " + (dineroRober - 2.9))
}
else {
    alert("Rober Lo sentimos, no es posible comprar alguna de las opciones")
}