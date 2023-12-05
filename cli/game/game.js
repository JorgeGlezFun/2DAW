// Crea el objeto
function Tamagotchi(vida, estado, hambre, sed) {
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
var monedas = 0;

// Es una funcion que muestra la informacion por pantalla
function informacion() {
    document.getElementById('vida').innerHTML = `Vida: ${vida}`;
    document.getElementById('estado').innerHTML = `Estado: ${estado[0]}`;
    document.getElementById('hambre').innerHTML = `Hambre: ${estado[1]} (${hambre})`;
    document.getElementById('sed').innerHTML = `Sed: ${estado[2]} (${sed})`;
    document.getElementById('dinero').innerHTML = `Dinero: ${monedas}€`;
}

// Suma 2 de hambre y 3 de sed cada 3 segundos
function estados() {
    // Si la vida no alcanza el valor máximo de 100, sigue sumando, si no, deja el contador al máximo (100).
    if (vida < 0) {
        vida = 0;
    } else if (vida >= 100) {
        vida = 100;
    }

    // Si el hambre no alcanza el valor máximo de 100, sigue sumando, si no, deja el contador al máximo (100).
    if (hambre < 100) {
        hambre += 2;
    } else if (hambre >= 100) {
        hambre = 100;
    }

    // Si la sed no alcanza el valor máximo de 100, sigue sumando, si no, deja el contador al máximo (100).
    if (sed < 100) {
        sed += 3;
    } else if (sed >= 100) {
        sed = 100;
    }

    // A medida que baja el hambre, va cambiando el estado
    if (hambre <= 0) {
        hambre = 0;
        estado[1] = "Lleno";
    } else if (hambre < 25) {
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

    // A medida que baja la sed, va cambiando el estado
    if (sed <= 0) {
        sed = 0;
        estado[2] = "Lleno";
    } else if (sed < 25) {
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

    // Comienza a restar vida si los valores de hambre o sed llegan a 100, tambien cambia el estado[0] según la vida que falte
    if (hambre == 100 || sed == 100) {
        vida -= 5
        if (vida <= 75 && vida > 50) {
            estado[0] = "Enfermo.";
        } else if (vida <= 50 && vida > 25) {
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
function alimentar() {
    if (vida > 0) {
        if (hambre > 0) {
            hambre -= 10;
        } else if (hambre < 0) {
            hambre = 0;
            hambre -= 0;
            informacion()
        }
        informacion()
    }
};

// Quita 10 de sed al pulsar
function darbebida() {
    if (vida > 0) {
        if (sed > 0) {
            sed -= 10;
        } else if (sed < 0) {
            sed = 0;
            sed -= 0;
            informacion()
        }
        informacion()
    }
}


// Variables para el despliegue de botones
var desplegadoComidas = false;
var desplegadoBebidas = false;
var desplegadoJuegos = false;

var comida = "";

function cambiarKebab() {
    return comida = "kebab";
}

function cambiarEnsalada() {
    return comida = "pollo";
}

function cambiarMacarrones() {
    return comida = "macarrones";
}

// Crea los botones de comida
function comidas() {
    var contenedorBotones = document.getElementById("contenedorComidas");
    contenedorBotones.innerHTML = "";

    if (!desplegadoComidas) {
        var kebab = document.createElement("button");
        kebab.innerHTML = "Kebab";

        var ensalada = document.createElement("button");
        ensalada.innerHTML = "Ensalada";

        var macarrones = document.createElement("button");
        macarrones.innerHTML = "Macarrones con tomatico";

        contenedorBotones.appendChild(kebab);
        contenedorBotones.appendChild(ensalada);
        contenedorBotones.appendChild(macarrones);

        desplegadoComidas = true;
    } else {
        desplegadoComidas = false;
    }
    kebab.addEventListener("click", cambiarKebab);
    ensalada.addEventListener("click", cambiarEnsalada);
    macarrones.addEventListener("click", cambiarMacarrones);
}

var Almacen = {
    "kebab": 0,
    "pollo": 0,
    "macarrones": 0,
    "agua": 0,
    "roncola": 0,
    "vodka": 0,
};

var bebida = "";

function cambiarAgua() {
    return bebida = "agua";
}

function cambiarRonCola() {
    return bebida = "roncola";
}

function cambiarVodka() {
    return bebida = "vodka";
}

// Crea los botones de bebida
function bebidas() {
    var contenedorBotones = document.getElementById("contenedorBebidas");
    contenedorBotones.innerHTML = "";

    if (!desplegadoBebidas) {
        var agua = document.createElement("button");
        agua.innerHTML = "Agua";

        var roncola = document.createElement("button");
        roncola.innerHTML = "Ron cola";

        var vodka = document.createElement("button");
        vodka.innerHTML = "Vodka";

        contenedorBotones.appendChild(agua);
        contenedorBotones.appendChild(roncola);
        contenedorBotones.appendChild(vodka);

        desplegadoBebidas = true;
    } else {
        desplegadoBebidas = false;
    }
    agua.addEventListener("click", cambiarAgua);
    roncola.addEventListener("click", cambiarRonCola);
    vodka.addEventListener("click", cambiarVodka);
}

// Crea los botones de juego
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

// Creacion del ahorcado
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
    let solucion = clave.join("")
    var solucionVacia = '_'.repeat(longitudPalabra).split("");
    var letrasUsadas = [];
    var respuesta = solucionVacia.join("");

    alert(respuesta);

    while (intentos > 0) {
        if (intentos == 0) {
            alert(`La palabra era ${solucion}`);
            break;
        }

        if (solucion == respuesta) {
            alert('Has ganado.')
            monedas += intentos * longitudPalabra;
            informacion();
            break;
        }

        var letra = prompt('Introduce una letra: ');
        var longitudLetra = letra.length;
        var tipoLetra = typeof letra;
        letra = letra.toUpperCase();

        if (tipoLetra != string || letra == '' || letra == null || longitudLetra > 1) {
            alert('No has introducido una letra.');
        }
        alert(respuesta);
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
            } else {
                intentos -= 1;
            }
        } else {
            alert(`Ya has usado la letra ${letra}.`)
        }
        letrasUsadas.push(letra);
    }
}

function juegoMatematico() {
    let operadorArray = ['+', '-', '*', '/'];
    let operadorLong = operadorArray.length;
    let digitos = parseInt(prompt('Introduce el número de digitos máximo que quieres que tengan los numeros: '));
    let intentos = 10;

    while (intentos > 0) {
        var numero1 = Math.floor(Math.random() * (10 ** digitos));
        let operador = operadorArray[Math.floor(Math.random() * operadorLong)];
        var numero2 = Math.floor(Math.random() * (10 ** digitos));
        var operacion = eval(`${numero1} ${operador} ${numero2}`);

        if (operador == '/'){
            operacion = operacion.tofixed(1)
        }
        var respuesta = parseInt(prompt(`Cual es el resultado de la operacion: ${numero1} ${operador} ${numero2}`));

        if (operacion == respuesta) {
            alert('Has acertado.');
            monedas += intentos * digitos;
            informacion()
            break;
        } else {
            alert('Has fallado.')
            alert(`El resultado es: ${operacion}`)
            intentos -= 1;
        }
    }
}

