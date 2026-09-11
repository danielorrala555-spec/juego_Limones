let canvas = document.getElementById("areaJuegos");
let ctx = canvas.getContext("2d");

let alturaSuelo = 50;
let puntaje = 0;
const ALTURA_PERSONAJE = 40;
const ANCHO_PERSONAJE = 40;
let personajeX = canvas.width / 2 - ANCHO_PERSONAJE / 2;
let personajeY = canvas.height - alturaSuelo - ALTURA_PERSONAJE;

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
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function moverDerecha(){
    personajeX += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarSuelo();
    dibujarPersonaje();
}

function moverIzquierda(){
    personajeX -= 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarSuelo();
    dibujarPersonaje();
}