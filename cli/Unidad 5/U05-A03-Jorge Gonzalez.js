/**
 * Realizar las acciones necesarias para deshabilitar el botón derecho del ratón al hacer click sobre
 * la ventana del navegador.
 */
document.addEventListener("contextmenu", clic_derecho => {
    clic_derecho.preventDefault();
} )
