function literales(){
    var n = prompt("Introduce un número entre el 1 y el 5 para mostrar su literal: ");
    var numeros = ["uno", "dos", "tres", "cuatro", "cinco"];
    if (!isNaN(n)) {
        if (numeros.includes(numeros[n - 1])){
            alert(numeros[n - 1]);
        } else {
            alert("El número introducido no es válido");
        } 
    } else {
        alert("El valor que has introducido no es válido");
    }
}