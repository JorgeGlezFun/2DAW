/**
 * Realizar un script que permita mover una caja dentro de la ventana del navegador tanto con las
 * teclas de desplazamiento del teclado central como con las del teclado numérico.
 */
document.addEventListener("keydown", tecla =>{
    accion = tecla.code;
    posicionX = document.getElementById("cubo").offsetLeft;
    posicionY = document.getElementById("cubo").offsetTop;
    switch (accion) {
        case keyW:

        case keyA:
            document.getElementById("cubo").offsetTop - 5;
        case keyS:
            document.getElementById("cubo").offsetTop + 5;
        case keyD:
            document.getElementById("cubo").offsetLeft + 5;
    };
})
