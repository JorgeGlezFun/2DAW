function validar() {

}

function validaDNI() {
    dni = document.getElementById("dni");
    patron = new RegExp('/^\d{2}\.\d{3}\.\d{3}\-[A-Z]{1}$/');
    if(!patron.test(dni.value)) {
        dni.value = ""
        alert("El DNI introducido no es válido.");
    }
}

function validaNombre() {

}

function validaNacimiento() {
    f_nacimiento = documento.getElementById("fecha_nacimiento");
    patron = new RegExp('/([0-2]{1}[0-9]{1}|3{1}[0-1]{1})\/(0[0-9]{1}|1{1}[0-2]{1})\/[0-9]{4}$/');
    if (!patron.test(f_nacimiento.value)){
        alert("La fecha introducida no es válida.");
    }
}

function validaEmail() {
    email = document.getElementById("email").value;
    patron = new RegExp('/^.{4,40}\@\w{4,10}\.\w{2,3}$/');
    if (!patron.test(email.value)){
        email = ""
        alert("El E-mail introducido no es válido.");
    }
}

function validaWeb() {
    web = document.getElementById("pagina_web").value;
    patron = new RegExp('/^http:\/\/w{3}\..{1,40}\.\w{2,3}$/');
    if (!patron.test(web.value)){
        alert("La web introducida no es válida");
    }
}

function validaContrasena() {
    contraseña = document.getElementById("contraseña").value;
    confirmacion = document.getElementById("confirmar_contraseña").value;
    patron = new RegExp('/^.{8,10}$/');
    if (!patron.test(contraseña.value)){

    }

}
