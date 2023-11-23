function palindromo(){
    var frase = prompt("Introduce una frase: ").toLowerCase();
    var sin_espacios = frase.split(' ').join(''); 
    var reverso = frase.split('').reverse();
    var vacio = '';
    for (f of reverso){
        vacio += f;
    }
    vacio = vacio.split(' ').join('');
    if (sin_espacios == vacio){
        alert("La frase que has introducido es un palindromo")
    } else {
        alert("La frase que has introducido no es un palindromo")
    }
}