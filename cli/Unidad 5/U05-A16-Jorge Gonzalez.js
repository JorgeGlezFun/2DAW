function setCookie(nombreCookie, valorCookie){
    document.cookie = nombreCookie + '=' + valorCookie;
}

function getCookie(nombreCookie){
    var cookie = document.cookie.split(' ');
    if (cookie) {
        return 0;
    } else {
        var longitudCookie = cookie.length;
        var nombres = [];
        var valores = [];
        for (var i = 0; i < longitudCookie; i++){
            nombres.push(cookie[i].split('=')[0]);
            valores.push(cookie[i].split('=')[1].split(';')[0]);
        }

        var indice = nombres.indexOf(nombreCookie);

        if (nombreCookie == nombres[indice]){
            return parseInt(valores[indice]) + 1;
        } else {
            return 0;
        }
    }
}

document.addEventListener("click", ()=> {
    var opciones = document.getElementsByName("opcion");
    var opcion = "";

    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opcion = opciones[i].value;
        }
    }

    if (getCookie(opcion)) {
        var contador = getCookie(opcion);
        setCookie(opcion, contador);
    } else {
        setCookie(opcion, getCookie(opcion));
    }
    console.log(getCookie(opcion));
})
