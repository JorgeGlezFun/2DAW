// Crea el objeto
function Tamagotchi(vida, estado, hambre, sed){
    this.vida = vida;
    this.estado = estado;
    this.hambre = hambre;
    this.sed = sed;
};

// Crea la instancia del objeto
let nyugotchi = new Tamagotchi(10, new Array("Sano", "Lleno", "Lleno"), 90, 90);

// Creación de variables para evitar la repeticion de código
var vida = nyugotchi.vida;
var estado = nyugotchi.estado;
var hambre = nyugotchi.hambre;
var sed = nyugotchi.sed;

// Es una funcion que muestra la informacion por pantalla
function informacion(){
        document.getElementById('vida').innerHTML = `Vida: ${vida}`;
        document.getElementById('estado').innerHTML = `Estado: ${estado[0]}`;
        document.getElementById('hambre').innerHTML = `Hambre: ${estado[1]} (${hambre})`;
        document.getElementById('sed').innerHTML = `Sed: ${estado[2]} (${sed})`;

}

// Suma 2 de hambre y 3 de sed cada 3 segundos
function estados(){
    // Si la vida no alcanza el valor máximo de 100, sigue sumando, si no, deja el contador al máximo (100).
    if (vida < 0){
        vida = 0;
    } else if (vida >= 100) {
        vida = 100;
    }

    // Si el hambre no alcanza el valor máximo de 100, sigue sumando, si no, deja el contador al máximo (100).
    if (hambre < 100){
        hambre += 2;
    } else if (hambre >= 100) {
        hambre = 100;
    }

    // Si la sed no alcanza el valor máximo de 100, sigue sumando, si no, deja el contador al máximo (100).
    if (sed < 100){
        sed += 3;
    } else if (sed >= 100){
        sed = 100;
    }

    // A medida que baja el hambre, va cambiando el estado
    if (hambre <= 0){
        hambre = 0;
        estado[1] = "Lleno";
    } else if (hambre < 25){
        estado[1] = "Lleno";
    } else if (hambre >= 25 && hambre < 50){
        estado[1] = "Poco hambriento.";
    } else if (hambre >= 50 && hambre < 75)  {
        estado[1] = "Algo hambriento.";
    } else if (hambre >= 75 && hambre < 100) {
        estado[1] = "Muy hambriento.";
    } else if (hambre == 100) {
        estado[1] = "Muriendo de hambre.";
        hambre = 100;
    }

    // A medida que baja la sed, va cambiando el estado
    if (sed <= 0){
        sed = 0;
        estado[2] = "Lleno";
    } else if (sed < 25){
        estado[2] = "Lleno";
    } else if (sed >= 25 && sed < 50){
        estado[2] = "Poco sediento";
    } else if (sed >= 50 && sed < 75)  {
        estado[2] = "Algo sediento.";
    } else if (sed >= 75 && sed < 100) {
        estado[2] = "Muy sediento.";
    } else if (sed == 100) {
        estado[2] = "Muriendo de sed.";
        sed = 100;
    }

    // Comienza a restar vida si los valores de hambre o sed llegan a 100, tambien cambia el estado[0] según la vida que falte
    if (hambre == 100 || sed == 100) {
        vida -= 5
        if (vida <= 75 && vida > 50){
            estado[0] = "Enfermo.";
        } else if (vida <= 50 && vida > 25)  {
            estado[0] = "Muy enfermo.";
        } else if (vida <= 25) {
            estado[0] = "Muriendose.";
        }
    }

    // Si la vida llega o baja de 0, se paran los intervalos y cambia la imagen
    if (vida <= 0) {
        vida = 0;
        estado[0] = "Muerto";
        document.getElementById("foto").src = "ñu-huesos.jpg";
        informacion();
        clearInterval(repiteEstados);
        clearInterval(repiteInformacion);
    }
}

var repiteEstados = setInterval(estados, 1000); // Ejecuta la funcion estados cada segundo
var repiteInformacion = setInterval(informacion, 0); // Ejecuta la funcion informacion cada 0 milesimas

// Quita 10 de hambre al pulsar
function alimentar(){
    if (vida > 0) {
        if (hambre > 0){
            hambre -= 10;
        } else if (hambre < 0){
            hambre = 0;
            hambre -= 0;
            informacion()
        }
        informacion()
    }
};

// Quita 10 de sed al pulsar
function darbebida(){
    if (vida > 0){
        if (sed > 0){
            sed -= 10;
        } else if (sed < 0){
            sed = 0;
            sed -= 0;
            informacion()
        }
        informacion()
    }
}