let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2

function iniciarJuego(){
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo(){
    ctx.fillStyle="blue"
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO)
}

function dibujarPersonaje(){
    ctx.fillStyle="orange"
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),40,ALTURA_PERSONAJE)
}
function moverIsquierda(){
    personajeX=personajeX-10;
    catualizarPantalla();
}
function catualizarPantalla(){
    lipiarCanva();
    dibujarSuelo();
    dibujarPersonaje();

}

function lipiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}