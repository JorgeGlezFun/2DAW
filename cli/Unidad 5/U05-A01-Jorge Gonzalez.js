/**
 * Realizar un script que cuando pulse el usuario con el botón del ratón en cualquier sitio de la
 * pantalla, identifique si ha pulsado con el botón derecho, izquierdo o la rueda central
 */
document.addEventListener("mousedown", clic => {
    accion = clic.button;
    res = accion == 0 ? "Has pulsado el botón izquierdo del ratón" :
          accion == 1 ? "Has pulsado el botón central del ratón" :
          accion == 2 ? "Has pulsado el botón derecho del ratón" :
          "";
    document.getElementById("texto").innerHTML += res + "<br>";
})

