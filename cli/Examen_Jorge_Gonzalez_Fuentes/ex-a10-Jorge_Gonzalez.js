function setCookie(nombreCookie, valorCookie) {
    document.cookie = nombreCookie + "=" + encodeURIComponent(valorCookie) + ";"
  }

function getCookie(nombreCookie) {
    let nombre = nombreCookie + "=";
    let cookieDescodificada = decodeURIComponent(document.cookie);
    let cookie = cookieDescodificada.split(";");
    for (let i = 0; i < cookie.length; i++) {
      let c = cookie[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(nombre) == 0) {
        return c.substring(nombre.length, c.length);
      }
    }
    return "";
}

var guardar = document.getElementById('guardar');
guardar.addEventListener("click", () => {
    var prueba = document.getElementsByName("prueba");
    for (var i = 0; i < (prueba.length); i++) {
        console.log(prueba[i].id);
        console.log(prueba[i].value);
        setCookie(prueba[i].id, prueba[i].value)
    }
});

var nombre = document.getElementById('nombre');
nombre.addEventListener('blur', validarNombre);
function validarNombre() {
    if (nombre.validity.valueMissing) {
        nombre.setCustomValidity('El campo nombre no puede estar vacío');
    } else if (nombre.validity.patternMismatch) {
        nombre.setCustomValidity('El patrón del nombre no es el correcto');
        nombre.value = '';
    } else {
        nombre.setCustomValidity('');
    }
    return nombre.checkValidity()
}

var apellido = document.getElementById('apellido');
apellido.addEventListener('blur', validarApellido);
function validarApellido() {
    if (apellido.validity.valueMissing) {
        apellido.setCustomValidity('El campo Apellido no puede estar vacío');
    } else if (apellido.validity.patternMismatch) {
        apellido.setCustomValidity('El patrón del Apellido no es el correcto');
        apellido.value = '';
    } else {
        apellido.setCustomValidity('');
    }
    return apellido.checkValidity()
}

var edad = document.getElementById('edad');
edad.addEventListener('blur', validarEdad);
function validarEdad() {
    if (edad.validity.valueMissing) {
        edad.setCustomValidity('El campo Edad no puede estar vacío');
    } else if (edad.validity.patternMismatch) {
        edad.setCustomValidity('El patrón del Edad no es el correcto');
        edad.value = '';
    } else {
        edad.setCustomValidity('');
    }
    return edad.checkValidity()
}

const letraDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];
var dni = document.getElementById('dni');
dni.addEventListener('blur', validarDni);
function validarDni() {
    if (dni.validity.valueMissing) {
        dni.setCustomValidity('El campo DNI no puede estar vacío');
    } else if (dni.validity.patternMismatch) {
        dni.setCustomValidity('El patrón del DNI no es el correcto');
        dni.value = '';
    } else if (!letraDni(dni.value)) {
        dni.setCustomValidity('Letra incorrecta.');
        dni.value = '';
    } else {
        dni.setCustomValidity('');
    }
    return dni.checkValidity()
}

function letraDni(dni) {
    let d = dni.split('-');
    if (d.length >= 2) {
        let numero = d[0].replaceAll('.', '');
        let resto = numero % 23;
        return d[1].toUpperCase() == letraDNI[resto];
    } else {
        return false;
    }
}

var ver_dni = document.getElementById('ver');
ver_dni.addEventListener('mousedown', ()=>{
    dni.type = 'text';
})

ver_dni.addEventListener('mouseup', ()=>{
    dni.type = 'password';
})

ver_dni.addEventListener('mouseleave', ()=>{
    dni.type = 'password';
})

var lugar_nacimiento = document.getElementById('lugar_nacimiento');
lugar_nacimiento.addEventListener('blur', validarLugarNacimiento);
function validarLugarNacimiento() {
    if (lugar_nacimiento.validity.valueMissing) {
        lugar_nacimiento.setCustomValidity('El campo Lugar de Nacimiento no puede estar vacío');
    } else if (lugar_nacimiento.validity.patternMismatch) {
        lugar_nacimiento.setCustomValidity('El patrón Lugar de Nacimiento no es el correcto');
        lugar_nacimiento.value = '';
    } else {
        lugar_nacimiento.setCustomValidity('');
    }
    return lugar_nacimiento.checkValidity()
}

var formulario = document.getElementById('formulario');
formulario.addEventListener('change', validarTodos);
function validarTodos(e) {
    if (!validarDni(dni) && !validarNombre(nombre) && !validarApellido(apellido)
    && !validarEdad(edad) && !validarLugarNacimiento(lugar_nacimiento)) {
e.preventDefault();
    }
}

