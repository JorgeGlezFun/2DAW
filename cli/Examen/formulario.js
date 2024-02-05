let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let dni = document.getElementById('dni');
let edad = document.getElementById('edad');
let lugar_nacimiento = document.getElementById('lugar_nacimiento');

const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

formulario.addEventListener('change', validarTodos);
dni.addEventListener('input', validarDni);
nombre.addEventListener('input', validarNombre);
apellido.addEventListener('input', validarApellido);
edad.addEventListener('input', validarEdad);
lugar_nacimiento.addEventListener('input', validarLugarNacimiento);


function validarDni() {
    if (dni.validity.valueMissing) {
        dni.setCustomValidity('Introduce un valor de DNI.');
    } else if (dni.validity.patternMismatch) {
        dni.setCustomValidity('DNI no válido.');
    } else if (!letraDni(dni.value)) {
        dni.setCustomValidity('Letra errónea.');
    } else {
        dni.setCustomValidity('');
    }

    if (dni.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function letraDni(dni) {
    let d = dni.split('-');
    if (d.length >= 2) {
        let numeroDni = d[0].replaceAll('.', '');
        let resto = numeroDni % 23;
        return d[1].toUpperCase() == letra[resto];
    } else {
        return false;
    }
}

function validarNombre() {
    if (nombre.validity.valueMissing) {
        nombre.setCustomValidity('Introduce un nombre.');
    } else if (nombre.validity.patternMismatch) {
        nombre.setCustomValidity('Nombre inválido.');
    } else {
        nombre.setCustomValidity('');
    }

    if (nombre.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarApellido() {
    if (apellido.validity.valueMissing) {
        apellido.setCustomValidity('Introduce un apellido.');
    } else if (apellido.validity.patternMismatch) {
        apellido.setCustomValidity('Apellido invalido.');
    } else {
        apellido.setCustomValidity('');
    }

    if (apellido.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarEdad() {
    if (edad.validity.valueMissing) {
        edad.setCustomValidity('Introduce un edad.');
    } else if (edad.validity.patternMismatch) {
        edad.setCustomValidity('Edad inválida.');
    } else {
        edad.setCustomValidity('');
    }

    if (edad.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarLugarNacimiento() {
    if (lugar_nacimiento.validity.valueMissing) {
        lugar_nacimiento.setCustomValidity('Introduce un lugar de nacimiento.');
    } else if (lugar_nacimiento.validity.patternMismatch) {
        lugar_nacimiento.setCustomValidity('Lugar de nacimiento inválido.');
    } else {
        lugar_nacimiento.setCustomValidity('');
    }

    if (lugar_nacimiento.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarTodos(e) {
    if (!validarDni(dni) && !validarNombre(nombre) && !validarApellido(apellido)
        && !validarEdad(edad) && !validarLugarNacimiento(lugar_nacimiento)) {
        e.preventDefault();
    }
}

function limpiarCampo(campo) {
    campo.value = '';
}

var boton = document.getElementById('ver')
boton.addEventListener('mousedown', ()=>{
    dni.type = 'text';
});

boton.addEventListener('mouseleave', ()=>{
    dni.type = 'password';
});


boton.addEventListener('mouseup', ()=>{
    dni.type = 'password';
});
