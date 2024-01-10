/**
 * Coloque en la aplicación una imagen, y que se cambie por otra imagen, y ésta se mantenga
 * mientras el usuario está pulsando algún botón del ratón, cuando suelte debe volver la primera
 * imagen
 */
document.addEventListener("DOMContentLoaded", function() {
    var foto = document.getElementById("foto");
    document.addEventListener('mousedown', clic_abajo => {
        foto.setAttribute("src", "boo_desactivado.png");
    })

    document.addEventListener('mouseup', clic_arriba => {
        foto.setAttribute("src", "boo_activo.png");
    })
})
