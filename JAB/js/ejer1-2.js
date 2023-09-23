let nom = "Jab"
let nomProduct = "Gorra"
let priceProduct = 5
let desc = 0.5
let finalPrice = 5-0.5
let talla = "S"

document.querySelector("body").innerHTML=`<h1><span>${nom}</span></h1>
<div style="border: 2px solid black; width: 300px; height: 357px;padding:20px">
<p>${nomProduct}: ${priceProduct}</p>
<p>Descuento: ${desc}</p>
<p><b>Precio final: ${finalPrice}</b></p>
<p>Talla: ${talla}</p>
<img src="img/gorra.png" class="imagen">
</div>`