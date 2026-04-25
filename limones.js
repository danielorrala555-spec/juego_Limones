let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=30;
const ANCHO_PERSONAJE=60;
const ANCHO_LIMON=20;
const ALTO_LIMON=20;

let personajeX=canvas.width/2
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE)
let limonX=canvas.width/2;
let limonY=0;
let puntaje=0;
let vidas=5;
let interval;
let velocidaCaida=200;

function iniciarJuego(){
    interval=setInterval(bajarLimon,velocidaCaida)
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

function dibujarSuelo(){
    ctx.fillStyle="blue"
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO)
}

function dibujarPersonaje(){
    ctx.fillStyle="orange"
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE)
}
function moverIsquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
   
}
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    

}    
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon(); 
     
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function dibujarLimon(){
    ctx.fillStyle="green"
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON)
}

function bajarLimon(){
    limonY = limonY + 10;
    actualizarPantalla();
    detectarColicion(); 
    detectarPiso();
}

function cambiarVelocidad(nuevaVelocidad){
    clearInterval(interval);
    velocidaCaida=nuevaVelocidad;
    interval = setInterval(bajarLimon,velocidaCaida);
}
function detectarColicion(){
    if(limonX+ANCHO_LIMON>personajeX && limonX < personajeX+ANCHO_PERSONAJE && limonY+ALTO_LIMON>personajeY && limonY < personajeY+ALTURA_PERSONAJE){
        aparecerLimon();
        puntaje=puntaje+1;
        let componente=document.getElementById("txtPuntaje");
        componente.textContent=puntaje;
        if (puntaje == 3){
        cambiarVelocidad(150);
        }
        if (puntaje == 6) {
        cambiarVelocidad(100);
        }
        if (puntaje== 10 ){
            alert("ganaste, ya pueders hacer limonada");
            clearInterval(interval);
        }
        
    }
   
     
    
}

function probarAleatorio9(){
    let aleatorio=generaAleatorio(10,80);
    console.log (aleatorio);
}
function aparecerLimon(){
    limonX=generaAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}

function detectarPiso(){
    if(limonY+ALTO_LIMON==canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas-1;
        let componente=document.getElementById("txtvidas");
        componente.textContent=vidas;
        if (vidas==0){
            alert("GAME OVER");
            clearInterval(interval);

        }
    }
    

}

function reiniciar(){
    puntaje = 0;
    vidas = 5;
    personaje =canvas.width / 2;
    document.getElementById("txtPuntaje").textContent = puntaje;
    document.getElementById("txtvidas").textContent = vidas;
    clearInterval(interval);
    iniciarJuego();

    cambiarVelocidad(200);
    
}