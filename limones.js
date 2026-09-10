let canvas = document.getElementById("areaJuegos");
let ctx = canvas.getContext("2d");

let alturaSuelo = 50;
let puntaje = 0;
const ALTURA_PERSONAJE = 40;
const ANCHO_PERSONAJE = 40;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo(){
    ctx.fillStyle = "#519bc9";
    ctx.fillRect(0, canvas.height - alturaSuelo, canvas.width, alturaSuelo);
}

function dibujarPersonaje(){
    ctx.fillStyle = "#c73232";
    ctx.font = "20px Arial";
    ctx.fillRect(canvas.width / 2 - ANCHO_PERSONAJE / 2, canvas.height - alturaSuelo - ALTURA_PERSONAJE, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}