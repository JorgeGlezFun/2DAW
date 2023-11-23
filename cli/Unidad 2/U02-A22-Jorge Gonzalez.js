function cluedo_barato(){
var sospechoso = document.getElementById("sospechosos").value;
var lugar = document.getElementById("lugar").value;
var arma = document.getElementById("armas").value;
var resultado = sospechoso + " lo hizo en el " + lugar + " con el " + arma + "!";
var asesino = ((sospechoso == "Sr Parker" && lugar == "salon de baile") && arma == "veneno") ? resultado:
              ((sospechoso == "Sra Van Cleve" && lugar == "la galeria") && arma == "trofeo") ? resultado:
              ((sospechoso == "Sra Sparr" && lugar == "la sala de billar") && arma == "palo de billar") ? resultado:
              ((sospechoso == "Sr Kalehoff" && lugar == "el comedor") && arma == "cuchillo") ? resultado:
                "No se ha encontrado al asesino."
document.getElementById("resultado").innerHTML = asesino;
}
