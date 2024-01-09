/**
 * Coloque en la aplicación una imagen, y que se cambie por otra imagen, y ésta se mantenga
 * mientras el usuario está pulsando algún botón del ratón, cuando suelte debe volver la primera
 * imagen
 */
var foto = document.getElementById("foto");
document.addEventListener('mousedown', clic_abajo =>  {
    foto.src = "boo_desactivado.jpg";
})

document.addEventListener('mouseup', clic_arriba => {
    foto.src = "boo_activado.png";
})
