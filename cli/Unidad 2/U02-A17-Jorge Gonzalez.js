function calculadora(opcion){
    switch (opcion){
        case "1":
            var x = parseInt(prompt("Introduce el primer número: "));
            var y = parseInt(prompt("Introduce el segundo número: "));
            alert(x + y);
            break;

        case "2":
            var x = parseInt(prompt("Introduce el primer número: "));
            var y = parseInt(prompt("Introduce el segundo número: "));
            alert(x - y);
            break;

        case "3":
            var x = parseInt(prompt("Introduce el primer número: "));
            var y = parseInt(prompt("Introduce el segundo número: "));
            alert(x * y);
            break;

        case "4":
            var x = parseInt(prompt("Introduce el primer número: "));
            var y = parseInt(prompt("Introduce el segundo número: "));
            alert(x / y);
            break;

        case "5":
            var x = parseInt(prompt("Introduce el primer número: "));
            var y = parseInt(prompt("Introduce el segundo número: "));
            alert(x % y);
            break;

        case "6":
            var confirmacion = confirm("¿Estas seguro de salir?");
            if (confirmacion){
                break;
            }
        default:
            alert("La opción que has introducido no es válida.");
            break;
    }
}
while (opcion != 6){
    var opcion = prompt("Selecciona una opción: ")
    calculadora(opcion);
    if (opcion == 6) {
        alert("¡Hasta luego!");
        window.close();
        break;
    }
}
