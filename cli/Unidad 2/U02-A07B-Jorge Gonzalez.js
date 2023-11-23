function notas(){
    var nota = parseInt(prompt("¿Que nota has obtenido en el examen?"));
    var texto = (nota <= 10 && nota >= 9) ? "Sobresaliente":
                (nota < 9 && nota >= 7) ? "Notable":
                (nota < 7 && nota >= 5) ? "Aprobado":
                (nota >= 0 && nota < 5) ? "Suspenso": "La nota que has introducido no es válida."
    document.getElementById("prueba").innerHTML=(texto);
}
