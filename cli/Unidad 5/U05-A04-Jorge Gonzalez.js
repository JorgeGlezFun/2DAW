/**
 * Realizar un script que, al pulsar un botón del ratón, el color de fondo del cuadro de mensaje
 * debe ser amarillo (#FFFF00) y cuando se pulsa una tecla, el color de fondo debe ser azul
 * (#CCE6FF). Al volver a mover el ratón, el color de fondo vuelve a ser blanco
 */

document.addEventListener('click', clic => {
    document.body.style.backgroundColor = "#FFFF00";
})

document.addEventListener('keydown', tecla => {
    document.body.style.backgroundColor = "#CCE6FF";
})

document.addEventListener('mousemove', mover => {
    document.body.style.backgroundColor = "white";
})
