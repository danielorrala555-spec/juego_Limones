let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHI_LIMON=20;
const ALTO_LIMON=20;

let personajeX=canvas.width/2
let limonX=canvas.width/2;
let limonY=5;

function iniciarJuego(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
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
function moverDerecha(){
    personajeX=personajeX+10;
    catualizarPantalla();
}    
function catualizarPantalla(){
    lipiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon(); 
}

function lipiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function dibujarLimon(){
    ctx.fillStyle="green"
    ctx.fillRect(limonX,limonY,ANCHI_LIMON,ALTO_LIMON)
}

function bajarLimon(){
    limonY = limonY + 10;
    catualizarPantalla()
}