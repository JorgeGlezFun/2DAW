function comprobar(contraseña){
    var intentos = 3;
    while (intentos >= 0){
        var pswd = prompt("Introduce tu contraseña");
        if (pswd != contraseña){
            intentos--; 
            alert("Intentalo de nuevo." + "\n" + "Te quedan " + intentos + " intento(s).")
        } else {
            alert("Bienvenido");
            break;
        }
        if (intentos == 0){
            alert("Cuenta bloqueada.");
        }
    }
}