window.addEventListener("keydown", propulsar);
window.addEventListener("keydown", despegar);

function propulsar(a){
    (a.key === "p") && (e.type == "keydown")
    ? document.getElementsByTagName("img").src="./img/nave2.png"
    : alert("error")
}

function despegar(e){
    (e.key === "d") && (e.type === "keydown")
    ? document.getElementsByTagName("img").style.bottom="100px"
    : alert("error")
}