var desplegado = false; 

function comidas(){
    var contenedorBotones = document.getElementById("contenedorComidas");
    contenedorBotones.innerHTML = "";

    if (!desplegado){
        var boton1 = document.createElement("button");
        boton1.innerHTML = "Kebab";

        var boton2 = document.createElement("button");
        boton2.innerHTML = "Pollo asado";

        var boton3 = document.createElement("button");
        boton3.innerHTML = "Macarrones con tomatico";

        contenedorBotones.appendChild(boton1);
        contenedorBotones.appendChild(boton2);
        contenedorBotones.appendChild(boton3);

        desplegado = true;
    } else {
        desplegado = false;
    }
}

function bebidas(){
    var contenedorBotones = document.getElementById("contenedorBebidas");
    contenedorBotones.innerHTML = "";

    if (!desplegado){
        var boton1 = document.createElement("button");
        boton1.innerHTML = "Agua";

        var boton2 = document.createElement("button");
        boton2.innerHTML = "Ron cola";

        var boton3 = document.createElement("button");
        boton3.innerHTML = "Vodka";

        contenedorBotones.appendChild(boton1);
        contenedorBotones.appendChild(boton2);
        contenedorBotones.appendChild(boton3);

        desplegado = true;
    } else {
        desplegado = false;
    }
}

function juegos(){
    var contenedorBotones = document.getElementById("contenedorJuegos");
    contenedorBotones.innerHTML = "";

    if (!desplegado){
        var boton1 = document.createElement("button");
        boton1.innerHTML = "Ahorcado";

        var boton2 = document.createElement("button");
        boton2.innerHTML = "Juego matemático";

        contenedorBotones.appendChild(boton1);
        contenedorBotones.appendChild(boton2);

        desplegado = true;
    } else {
        desplegado = false;
    }
}