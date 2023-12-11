function Tamagotchi(vida, estado, hambre, sed) {
    this.vida = vida;
    this.estado = estado;
    this.hambre = hambre;
    this.sed = sed;
};

let nyugotchi = new Tamagotchi(100, new Array("Sano", "Lleno", "Lleno"), 0, 0);

var vida = nyugotchi.vida;
var estado = nyugotchi.estado;
var hambre = nyugotchi.hambre;
var sed = nyugotchi.sed;
var monedas = 0;
var puntuacion = 0;

var Almacen = {
    "kebab": 0,
    "ensalada": 0,
    "macarrones": 5,
    "agua": 5,
    "cola": 0,
    "zumo": 0,
};

function informacion() {
    document.getElementById('vida').innerHTML = `Vida: ${vida}`;
    document.getElementById('estado').innerHTML = `Estado: ${estado[0]}`;
    document.getElementById('hambre').innerHTML = `Hambre: ${estado[1]} (${hambre}%)`;
    document.getElementById('sed').innerHTML = `Sed: ${estado[2]} (${sed}%)`;
    document.getElementById('dinero').innerHTML = `Dinero: ${monedas}€`;

    if (hambre < 25) {
        estado[1] = "Lleno";
    } else if (hambre >= 25 && hambre < 50) {
        estado[1] = "Poco hambriento.";
    } else if (hambre >= 50 && hambre < 75) {
        estado[1] = "Algo hambriento.";
    } else if (hambre >= 75 && hambre < 100) {
        estado[1] = "Muy hambriento.";
    } else if (hambre == 100) {
        estado[1] = "Muriendo de hambre.";
        hambre = 100;
    }

    if (sed < 25) {
        estado[2] = "Lleno";
    } else if (sed >= 25 && sed < 50) {
        estado[2] = "Poco sediento";
    } else if (sed >= 50 && sed < 75) {
        estado[2] = "Algo sediento.";
    } else if (sed >= 75 && sed < 100) {
        estado[2] = "Muy sediento.";
    } else if (sed == 100) {
        estado[2] = "Muriendo de sed.";
        sed = 100;
    }

    if (vida <= 75 && vida > 50) {
        estado[0] = "Enfermo.";
    } else if (vida <= 50 && vida > 25) {
        estado[0] = "Muy enfermo.";
    } else if (vida <= 25) {
        estado[0] = "Muriendose.";
    }

    if (vida <= 0) {
        vida = 0;
        estado[0] = "Muerto";
        var contenedorRestart = document.getElementById("contenedorRestart");
        var compra = document.getElementById("compra");
        var venta = document.getElementById("venta");
        var estados = document.getElementById("estados");
        var contenedorA = document.getElementById("contenedorAcciones");
        var contenedorT = document.getElementById("contenedorTienda");
        var contenedorC = document.getElementById("contenedorComprar");
        var contenedorV = document.getElementById("contenedorVentas");
        var contenedorCo = document.getElementById("contenedorComidas");
        var contenedorB = document.getElementById("contenedorBebidas");
        var contenedorJ = document.getElementById("contenedorJuegos");
        var botonA = document.getElementById("botonA");
        var botonB = document.getElementById("botonB");
        var botonJ = document.getElementById("botonJ");
        var tituloTienda = document.getElementById("tituloTienda");
        var tituloAcciones = document.getElementById("tituloAcciones");

        compra.remove();
        venta.remove();
        estados.remove();
        contenedorA.remove();
        contenedorT.remove();
        contenedorC.remove();
        contenedorV.remove();
        contenedorCo.remove();
        contenedorB.remove();
        contenedorJ.remove();
        botonA.remove();
        botonB.remove();
        botonJ.remove();
        tituloTienda.remove();
        tituloAcciones.remove();

        var reiniciar = document.createElement("button");
        reiniciar.innerHTML = "Reiniciar";
        contenedorRestart.appendChild(reiniciar);
        reiniciar.addEventListener("click", restart);

        var GameOver = document.getElementById("GameOver")
        GameOver.innerHTML = "GAME OVER";

        var puntuacionFinal = document.getElementById("puntuacion");
        puntuacionFinal.innerHTML = `Has conseguido: ${puntuacion} puntos.`;

        var foto = document.getElementById("foto");
        foto.src = "ñu-huesos.png";
        foto.id = "muerto";
        informacion();
        clearInterval(repiteEstados);
        clearInterval(repiteInformacion);
    }
}

function estados() {
    if (hambre <= 33 && sed <= 33){
        if ((vida + 5) < 100){
            vida += 5;
        } else if ((vida + 5) >= 100){
            vida = 100
        }
    }
    else if (hambre <= 66 && sed <= 66){
        if ((vida + 3) < 100){
            vida += 3;
        } else if ((vida + 3) >= 100){
            vida = 100
        }
    }
    else if (hambre <= 99 && sed <= 99){
        if ((vida + 1) < 100){
            vida += 1;
        } else if ((vida + 1) >= 100){
            vida = 100
        }
    }

    if ((hambre + 5) < 100) {
        hambre += 5;
    } else if ((hambre + 5) >= 100) {
        hambre = 100;
    }

    if ((sed + 7) < 100) {
        sed += 7;
    } else if ((sed + 7) >= 100) {
        sed = 100;
    }

    if (hambre >= 100 || sed >= 100) {
        vida -= 10
    }
}

function restart(){
    location.reload();
}

function puntuacionFinal(){
    puntuacion += 1;
}

var puntuacion = setInterval(puntuacionFinal, 1000);
var repiteEstados = setInterval(estados, 10000);
var repiteInformacion = setInterval(informacion, 0);

var desplegadoComidas = false;
var desplegadoBebidas = false;
var desplegadoJuegos = false;
var desplegadoCompras = false;
var desplegadoVentas = false;

function comidas() {
    var contenedorBotones = document.getElementById("contenedorComidas");
    contenedorBotones.innerHTML = "";

    if (!desplegadoComidas) {
        var kebab = document.createElement("button");
        kebab.innerHTML = `Kebab: ${Almacen['kebab']}`;

        var ensalada = document.createElement("button");
        ensalada.innerHTML = `Ensalada: ${Almacen['ensalada']}`;

        var macarrones = document.createElement("button");
        macarrones.innerHTML = `Macarrones con tomate: ${Almacen['macarrones']}`;

        contenedorBotones.appendChild(kebab);
        contenedorBotones.appendChild(ensalada);
        contenedorBotones.appendChild(macarrones);

        desplegadoComidas = true;
    } else {
        desplegadoComidas = false;
    }

    function darKebab(){
        if (vida > 0){
            if (Almacen['kebab'] > 0) {
            if (hambre >= 50){
                hambre -= 50;
                    Almacen['kebab'] -= 1;
                    kebab.innerHTML = `Kebab: ${Almacen['kebab']}`;
                } else {
                    hambre -= hambre;
                    Almacen['kebab'] -= 1;
                    kebab.innerHTML = `Kebab: ${Almacen['kebab']}`;
                }
            }
        }
    }

    function darEnsalada(){
        if (vida > 0){
            if (Almacen['ensalada'] > 0) {
            if (hambre >= 30){
                hambre -= 30;
                    Almacen['ensalada'] -= 1;
                    ensalada.innerHTML = `Ensalada: ${Almacen['ensalada']}`;
                } else {
                    hambre -= hambre;
                    Almacen['ensalada'] -= 1;
                    ensalada.innerHTML = `Ensalada: ${Almacen['ensalada']}`;
                }
            }
        }
    }

    function darMacarrones(){
        if (vida > 0){
            if (Almacen['macarrones'] > 0) {
            if (hambre >= 15){
                hambre -= 15;
                    Almacen['macarrones'] -= 1;
                    macarrones.innerHTML = `Macarrones con tomate: ${Almacen['macarrones']}`;
                } else {
                    hambre -= hambre;
                    Almacen['macarrones'] -= 1;
                    macarrones.innerHTML = `Macarrones con tomate: ${Almacen['macarrones']}`;
                }
            }
        }
    }

    kebab.addEventListener("click", darKebab);
    ensalada.addEventListener("click", darEnsalada);
    macarrones.addEventListener("click", darMacarrones);
}

function bebidas() {
    var contenedorBotones = document.getElementById("contenedorBebidas");
    contenedorBotones.innerHTML = "";

    if (!desplegadoBebidas) {
        var agua = document.createElement("button");
        agua.innerHTML = `Agua: ${Almacen['agua']}`;

        var cola = document.createElement("button");
        cola.innerHTML = `Cola: ${Almacen['cola']}`;

        var zumo = document.createElement("button");
        zumo.innerHTML = `Zumo: ${Almacen['zumo']}`;

        contenedorBotones.appendChild(agua);
        contenedorBotones.appendChild(cola);
        contenedorBotones.appendChild(zumo);

        desplegadoBebidas = true;
    } else {
        desplegadoBebidas = false;
    }

    function darAgua(){
        if (vida > 0){
            if (Almacen['agua'] > 0) {
            if (sed >= 40){
                sed -= 40;
                    Almacen['agua'] -= 1;
                    agua.innerHTML = `Agua: ${Almacen['agua']}`;
                } else {
                    sed -= sed;
                    Almacen['agua'] -= 1;
                    agua.innerHTML = `Agua: ${Almacen['agua']}`;
                }
            }
        }
    }

    function darCola(){
        if (vida > 0){
            if (Almacen['cola'] > 0) {
            if (sed >= 20) {
                sed -= 20;
                    Almacen['cola'] -= 1;
                    cola.innerHTML = `Cola: ${Almacen['cola']}`;
                } else {
                    sed -= sed;
                    Almacen['cola'] -= 1;
                    cola.innerHTML = `Cola: ${Almacen['cola']}`;
                }
            }
        }
    }

    function darZumo(){
        if (vida > 0){
            if (Almacen['zumo'] > 0) {
            if (sed >= 15 && hambre >= 5){
                sed -= 15
                    hambre -= 5;
                    Almacen['zumo'] -= 1;
                    zumo.innerHTML = `Zumo: ${Almacen['zumo']}`;
                } else {
                    sed -= sed;
                    hambre -= hambre;
                    Almacen['zumo'] -= 1;
                    zumo.innerHTML = `Zumo: ${Almacen['zumo']}`;
        }
            }
        }
    }

    agua.addEventListener("click", darAgua);
    cola.addEventListener("click", darCola);
    zumo.addEventListener("click", darZumo);
}

function comprar(){
    var contenedorBotones = document.getElementById("contenedorComprar");
    contenedorBotones.innerHTML = "";

    if (!desplegadoCompras) {
        var agua = document.createElement("button");
        agua.innerHTML = `Agua: ${Almacen['agua']} (30€)`;

        var cola = document.createElement("button");
        cola.innerHTML = `Cola: ${Almacen['cola']} (20€)`;

        var zumo = document.createElement("button");
        zumo.innerHTML = `Zumo: ${Almacen['zumo']} (25€)`;

        var kebab = document.createElement("button");
        kebab.innerHTML = `Kebab: ${Almacen['kebab']} (60€)`;

        var ensalada = document.createElement("button");
        ensalada.innerHTML = `Ensalada: ${Almacen['ensalada']} (35€)`;

        var macarrones = document.createElement("button");
        macarrones.innerHTML = `Macarrones con tomate: ${Almacen['macarrones']} (15€)`;

        contenedorBotones.appendChild(agua);
        contenedorBotones.appendChild(cola);
        contenedorBotones.appendChild(zumo);
        contenedorBotones.appendChild(kebab);
        contenedorBotones.appendChild(ensalada);
        contenedorBotones.appendChild(macarrones);

        desplegadoCompras = true;
    } else {
        desplegadoCompras = false;
    }
    function comprarAgua(){
        if (monedas >= 30) {
            Almacen['agua'] += 1;
            monedas -= 30;
            agua.innerHTML = `Agua: ${Almacen['agua']} (30€)`;
            informacion();
        }
    }

    function comprarCola(){
        if (monedas >= 20) {
            Almacen['cola'] += 1;
            monedas -= 20;
            cola.innerHTML = `Cola: ${Almacen['cola']} (20€)`;
            informacion();
        }
    }

    function comprarZumo(){
        if (monedas >= 25) {
            Almacen['zumo'] += 1;
            monedas -= 25;
            zumo.innerHTML = `Zumo: ${Almacen['zumo']} (25€)`;
            informacion();
        }
    }

    function comprarKebab(){
        if (monedas >= 60) {
            Almacen['kebab'] += 1;
            monedas -= 60;
            kebab.innerHTML = `Kebab: ${Almacen['kebab']} (60€)`;
            informacion();
        }
    }

    function comprarEnsalada(){
        if (monedas >= 35) {
            Almacen['ensalada'] += 1;
            monedas -= 35;
            ensalada.innerHTML = `Ensalada: ${Almacen['ensalada']} (35€)`;
            informacion();
        }
    }

    function comprarMacarrones(){
        if (monedas >= 15) {
            Almacen['macarrones'] += 1;
            monedas -= 15;
            macarrones.innerHTML = `Macarrones con tomate: ${Almacen['macarrones']} (15€)`;
            informacion();
        }
    }
    agua.addEventListener("click", comprarAgua);
    cola.addEventListener("click", comprarCola);
    zumo.addEventListener("click", comprarZumo);
    kebab.addEventListener("click", comprarKebab);
    ensalada.addEventListener("click", comprarEnsalada);
    macarrones.addEventListener("click", comprarMacarrones);
}

function vender(){
    var contenedorBotones = document.getElementById("contenedorVentas");
    contenedorBotones.innerHTML = "";

    if (!desplegadoVentas) {
        var agua = document.createElement("button");
        agua.innerHTML = `Agua: ${Almacen['agua']} (15€)`;

        var cola = document.createElement("button");
        cola.innerHTML = `Cola: ${Almacen['cola']} (7€)`;

        var zumo = document.createElement("button");
        zumo.innerHTML = `Zumo: ${Almacen['zumo']} (8€)`;

        var kebab = document.createElement("button");
        kebab.innerHTML = `Kebab: ${Almacen['kebab']} (20€)`;

        var ensalada = document.createElement("button");
        ensalada.innerHTML = `Ensalada: ${Almacen['ensalada']} (12€)`;

        var macarrones = document.createElement("button");
        macarrones.innerHTML = `Macarrones con tomate: ${Almacen['macarrones']} (7€)`;

        contenedorBotones.appendChild(agua);
        contenedorBotones.appendChild(cola);
        contenedorBotones.appendChild(zumo);
        contenedorBotones.appendChild(kebab);
        contenedorBotones.appendChild(ensalada);
        contenedorBotones.appendChild(macarrones);

        desplegadoVentas = true;
    } else {
        desplegadoVentas = false;
    }

    function venderAgua(){
        if (Almacen['agua'] > 0) {
            Almacen['agua'] -= 1;
            monedas += 15;
            agua.innerHTML = `Agua: ${Almacen['agua']} (15€)`;
            informacion();
        }
    }

    function venderCola(){
        if (Almacen['cola'] > 0) {
            Almacen['cola'] -= 1;
            monedas += 7;
            cola.innerHTML = `Cola: ${Almacen['cola']} (7€)`;
            informacion();
        }
    }

    function venderZumo(){
        if (Almacen['zumo'] > 0) {
            Almacen['zumo'] -= 1;
            monedas += 8;
            zumo.innerHTML = `Zumo: ${Almacen['zumo']} (8€)`;
            informacion();
        }
    }

    function venderKebab(){
        if (Almacen['kebab'] > 0) {
            Almacen['kebab'] -= 1;
            monedas += 20;
            kebab.innerHTML = `Kebab: ${Almacen['kebab']} (20€)`;
            informacion();
        }
    }

    function venderEnsalada(){
        if (Almacen['ensalada'] > 0) {
            Almacen['ensalada'] -= 1;
            monedas += 12;
            ensalada.innerHTML = `Ensalada: ${Almacen['ensalada']} (12€)`;
            informacion();
        }
    }

    function venderMacarrones(){
        if (Almacen['macarrones'] > 0) {
            Almacen['macarrones'] -= 1;
            monedas += 5;
            macarrones.innerHTML = `Macarrones con tomate: ${Almacen['macarrones']} (7€)`;
            informacion();
        }
    }
    agua.addEventListener("click", venderAgua);
    cola.addEventListener("click", venderCola);
    zumo.addEventListener("click", venderZumo);
    kebab.addEventListener("click", venderKebab);
    ensalada.addEventListener("click", venderEnsalada);
    macarrones.addEventListener("click", venderMacarrones);
}

function juegos() {
    var contenedorBotones = document.getElementById("contenedorJuegos");
    contenedorBotones.innerHTML = "";

    if (!desplegadoJuegos) {
        var hanged = document.createElement("button");
        hanged.innerHTML = "Ahorcado";

        var matematico = document.createElement("button");
        matematico.innerHTML = "Juego matemático";
        contenedorBotones.appendChild(hanged);
        contenedorBotones.appendChild(matematico);

        desplegadoJuegos = true;
    } else {
        desplegadoJuegos = false;
    }
    hanged.addEventListener("click", ahorcado);
    matematico.addEventListener("click", juegoMatematico);
}

function ahorcado() {
    const palabras = {
        a: ['amarillo', 'avion', 'animal'],
        b: ['ballena', 'barco', 'bailar'],
        c: ['casa', 'cielo', 'comer'],
        d: ['delfin', 'dibujo', 'deporte'],
        e: ['elefante', 'escuela', 'escuchar'],
        f: ['familia', 'fuego', 'flor'],
        g: ['gato', 'globo', 'guitarra'],
        h: ['helado', 'hogar', 'huevo'],
        i: ['iglesia', 'isla', 'iluminar'],
        j: ['jardin', 'jugar', 'joya'],
        k: ['kiwi', 'kiosco', 'karate'],
        l: ['leon', 'luz', 'lago'],
        m: ['mariposa', 'montana', 'musica'],
        n: ['nieve', 'nadar', 'nube'],
        o: ['oso', 'oceano', 'oir'],
        p: ['perro', 'parque', 'pintar'],
        q: ['queso', 'quimica', 'quieto'],
        r: ['rayo', 'rosa', 'reir'],
        s: ['sol', 'serpiente', 'saltar'],
        t: ['tigre', 'tren', 'triste'],
        u: ['unicornio', 'unir', 'ultimo'],
        v: ['volar', 'verde', 'vino'],
        w: ['whisky', 'waffle', 'windsurf'],
        x: ['xilofono', 'xenofobia', 'xenon'],
        y: ['yoga', 'yogur', 'yunque'],
        z: ['zapato', 'zigzag', 'zoologico']
    };

    let llaves = Object.keys(palabras);
    let longitudLlaves = llaves.length;
    let indiceLlave = Math.floor(Math.random() * longitudLlaves);
    let llave = llaves[indiceLlave];

    let claves = palabras[llave];
    let longitudClaves = claves.length;
    let indiceClave = Math.floor(Math.random() * longitudClaves);
    let clave = claves[indiceClave].toUpperCase().split("");

    let intentos = 10;

    let longitudPalabra = clave.length;
    let solucion = clave.join("");
    var solucionVacia = '_'.repeat(longitudPalabra).split("");
    var letrasUsadas = [];

    let simbolos = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
    ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{',
    '|', '}', '~', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    while (intentos >= 0) {
        var respuesta = solucionVacia.join(" ");
        var solucionRespuesta = solucionVacia.join("");
        alert(respuesta);
        if (intentos == 0) {
            alert(`La palabra era ${solucion}`);
            break;
        }

        if (solucion == solucionRespuesta) {
            alert('Has ganado.');
            monedas += intentos * longitudPalabra;
            informacion();
            break;
        }

        var letra = prompt('Introduce una letra: ');
        var longitudLetra = letra.length;
        letra = letra.toUpperCase();

        if (simbolos.includes(letra) || letra == '' || letra == null || longitudLetra > 1) {
            alert('No has introducido una letra.');
        }
        else {
            if (!letrasUsadas.includes(letra)) {
                letra.toUpperCase();
                if (clave.includes(letra)) {
                    for (c of clave) {
                        if (c == letra) {
                            var indice = clave.indexOf(c);
                            clave[indice] = '_';
                            solucionVacia[indice] = letra;
                        }
                    }
                }
                else {
                    intentos -= 1;
                }
            }
            else {
                alert(`Ya has usado la letra ${letra}.`);
            }
        }
        letrasUsadas.push(letra);
    }
}

function juegoMatematico() {
    let operadorArray = ['+', '-', '*', '/'];
    let operadorLong = operadorArray.length;
    let digitos = parseInt(prompt('Introduce el número de digitos máximo que quieres que tengan los numeros: '));
    let preguntas = parseInt(prompt('Introduce el número de operaciones máxima que quieres hacer: '));
    var preguntasAcertadas = 0;
    var vidas = 10;

    while (preguntas > 0) {
        var numero1 = Math.floor(Math.random() * (10 ** digitos));
        let operador = operadorArray[Math.floor(Math.random() * operadorLong)];
        var numero2 = Math.floor(Math.random() * (10 ** digitos));
        var operacion = eval(`${numero1} ${operador} ${numero2}`);

        var respuesta = parseInt(prompt(`Cual es el resultado de la operacion: ${numero1} ${operador} ${numero2}`))

        if (operador == '/'){
            operacion = operacion.toFixed(1);
        }

        if (operacion == respuesta) {
            alert('Has acertado.')
            preguntasAcertadas += 1;
            preguntas -= 1;
        }
        else {
            alert('Has fallado');
            alert(`El resultado es: ${operacion}`);
            preguntas -= 1;
            vidas -= 1;
        }
    }

    var ganancias = vidas + digitos * preguntasAcertadas;
    monedas += ganancias
    alert(`Has ganado ${ganancias} monedas.`)
}
