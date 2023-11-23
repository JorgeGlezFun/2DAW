function aBooleano(valor){
    var booleano = new Boolean(valor);
    alert("La conversion a booleano del valor " + valor + " que has introducido es: " + booleano);
}

function aString(valor){
    alert("La conversion a string del valor " + valor + " que has introducido es: " + "'" + valor + "'");
}

function aNumero(valor){
    if (typeof valor == 'string' && valor == 'true'){
        valor = 1;
        var conv = confirm("Selecciona aceptar si quieres pasarlo a 'int' o selecciona cancelar si quieres pasarlo a 'float'.") ? parseInt(valor): parseFloat(valor);
        alert(conv);
    } else if (typeof valor == 'string' && valor == 'false'){
        valor = 0;
        var conv = confirm("Selecciona aceptar si quieres pasarlo a 'int' o selecciona cancelar si quieres pasarlo a 'float'.") ? parseInt(valor): parseFloat(valor);
        alert(conv);
    } else if (typeof valor == 'string') {
        var longitud = valor.length
        var conv = confirm("Selecciona aceptar si quieres pasarlo a 'int' o selecciona cancelar si quieres pasarlo a 'float'.") ? parseInt(longitud): parseFloat(longitud);
        alert(conv);
    }
}
