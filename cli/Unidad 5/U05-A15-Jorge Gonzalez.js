function setCookie(nombreCookie, valorCookie){
    document.cookie = nombreCookie + '=' + valorCookie;
}

function getCookie(nombreCookie){
    var cookie = document.cookie.split('=');
    if (nombreCookie == cookie[0]){
        return parseInt(cookie[1]);
    } else {
        return 0;
    }
}

if (getCookie('acumulador')) {
    var contador = parseInt(getCookie('acumulador')) + 1;
    setCookie('acumulador', contador);
    } else {
    setCookie('acumulador', 1);
    var contador = 1;
}

document.getElementById('contador').innerText = contador;
