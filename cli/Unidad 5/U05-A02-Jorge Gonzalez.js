/**
 * Realizar un script que permita mover una caja dentro de la ventana del navegador tanto con las
 * teclas de desplazamiento del teclado central como con las del teclado numérico.
 */
var cubo = document.getElementById("cubo");
var posicionX = 0;
var posicionY = 0;

document.addEventListener("keydown", tecla => {
    switch (tecla.key) {
        case "ArrowUp":
            posicionY -= 5;
            cubo.style.top = posicionY + "px";
            break;

        case "ArrowDown":
            posicionY += 5;
            cubo.style.top = posicionY + "px";
            break;

        case "ArrowLeft":
            posicionX -= 5;
            cubo.style.left = posicionX + "px";
            break;

        case "ArrowRight":
            posicionX += 5;
            cubo.style.left = posicionX + "px";
            break;
    };
})
