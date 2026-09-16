let canvas = document.getElementById("areaJuegos");
let ctx = canvas.getContext("2d");

let alturaSuelo = 30;
let puntaje = 0;
const ALTURA_PERSONAJE = 30;
const ANCHO_PERSONAJE = 80;
const ALTURA_LIMON = 60;
const ANCHO_LIMON = 60;
let personajeX = canvas.width / 2 - ANCHO_PERSONAJE / 2;
let personajeY = canvas.height - alturaSuelo - ALTURA_PERSONAJE;
let limonX = canvas.width / 2 - ANCHO_LIMON / 2;
let limonY = 0;
let vidas = 3;
let velocidadLimon = 200;
let intervaloLimon;

function iniciar(){
    intervaloLimon = setInterval(bajarLimon, velocidadLimon);
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}
function crearIntervaloLimon(){
    clearInterval(intervaloLimon);
    intervaloLimon = setInterval(bajarLimon, velocidadLimon);
}

function dibujarSuelo(){
    ctx.fillStyle = "#5a347b";
    ctx.fillRect(0, canvas.height - alturaSuelo, canvas.width, alturaSuelo);
}

function dibujarPersonaje(){
    ctx.fillStyle = "#c73232";
    ctx.font = "20px Arial";
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function dibujarLimon(){
    ctx.fillStyle = "#931dae";
    ctx.fillRect(limonX, limonY, ANCHO_LIMON, ALTURA_LIMON);
}


function moverDerecha(){
    if(personajeX + ANCHO_PERSONAJE < canvas.width){
    personajeX += 10;
    actualizarPantalla();
    }
}

function moverIzquierda(){
    if(personajeX > 0){
        personajeX -= 10;
        actualizarPantalla();
    }
}

function actualizarPantalla(){
    limpiarPantalla();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    
}

function limpiarPantalla(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
}

function bajarLimon(){
    limonY += 5;
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado(){
    if(limonY + ALTURA_LIMON >= personajeY && limonX + ANCHO_LIMON >= personajeX && limonX <= personajeX + ANCHO_PERSONAJE){
        puntaje++;
        mostrarEnSpam("txtPuntaje", puntaje);
        aparecerLimon();
        switch(puntaje){
        case 3:
            velocidadLimon = 150;
            crearIntervaloLimon();
            break;
        case 6:
            velocidadLimon = 100;
            crearIntervaloLimon();
            break;
        case 9:
            velocidadLimon = 50;
            crearIntervaloLimon();
            break;
        case 10:
            clearInterval(intervaloLimon);
            alert("Ganaste! 🏆, tu puntaje es: " + puntaje);
            location.reload();
            break;
        default:
            break;
        }
    }
}

function detectarPiso(){
    if(limonY + ALTURA_LIMON >= canvas.height - alturaSuelo){
        aparecerLimon();
        vidas--;
        mostrarEnSpam("txtVida", vidas);
        if(vidas <= 0){
            alert("suerte para la proxim, tu puntaje es: " + puntaje);
            location.reload();
        }
    }
}

function aparecerLimon(){
    limonX = generarAleatorio(0, canvas.width - ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}
function reiniciarJuego(){
    puntaje = 0;
    vidas = 3;
    velocidadLimon = 200;
    mostrarEnSpam("txtPuntaje", puntaje);
    mostrarEnSpam("txtVida", vidas);
    aparecerLimon();
    crearIntervaloLimon();
}
