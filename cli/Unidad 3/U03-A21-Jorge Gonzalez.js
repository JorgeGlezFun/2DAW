function parametros(){
    document.getElementById("1").innerHTML = "Navigator  <b>appCodeName</b>: " + navigator.appCodeName;
    document.getElementById("2").innerHTML = "Navigator  <b>appName</b>: " + navigator.appName;
    document.getElementById("3").innerHTML = "Navigator  <b>appVersion</b>: " + navigator.appVersion;
    document.getElementById("4").innerHTML = "Navigator  <b>cookieEnabled</b>: " + navigator.cookieEnabled;
    document.getElementById("5").innerHTML = "Navigator  <b>platform</b>: " + navigator.platform;
    document.getElementById("6").innerHTML = "Navigator  <b>userAgent</b>: " + navigator.userAgent;
    document.getElementById("7").innerHTML = "Navigator  <b>language</b>: " + navigator.language;
    document.getElementById("8").innerHTML = "Navigator  <b>product</b>: " + navigator.product;
    document.getElementById("9").innerHTML = "Navigator  <b>plugins</b>: " + navigator.plugins;
    document.getElementById("10").innerHTML = "La altura es: " + screen.height;
    document.getElementById("11").innerHTML = "La altura disponible es: " + screen.availHeight;
    document.getElementById("12").innerHTML = "El ancho es: " + screen.width;
    document.getElementById("13").innerHTML = "El ancho disponible es: " + screen.availWidth;
    document.getElementById("14").innerHTML = "La altura de la barra de tarea es: " + (screen.height - screen.availHeight);
    document.getElementById("15").innerHTML = "El ancho de la barra de tarea es: " + (screen.width - screen.availWidth);
};
function modificar_color(){
    var color = document.getElementById("seleccion").value;
    document.body.style.backgroundColor = color;
};