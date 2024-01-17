function validaDNI() {
    var dni = document.getElementById("dni");
    if(!dni.checkValidity()) {
        dni.value = "";
    }
}

function validaNombre() {
    nombre = document.getElementById("nombre");
    if (!nombre.checkValidity()) {
        nombre.value = "";
    }
}

function validaNacimiento() {
    f_nacimiento = document.getElementById("fecha_nacimiento");
    if (!f_nacimiento.checkValidity()) {
        f_nacimiento.value = "";
    }
}

function validaEmail() {
    email = document.getElementById("email");
    if (!email.checkValidity()) {
        email.value = "";
    }
}

function validaWeb() {
    web = document.getElementById("pagina_web");
    if (!web.checkValidity()) {
        web = "";
    }
}

function validaContrasena() {
    contraseña = document.getElementById("contraseña");
    if (!contraseña.checkValidity()) {
        contraseña = "";
    }
}

function confirma_contrasenas() {
    contraseña = document.getElementById("contraseña").value;
    confirmacion = document.getElementById("confirmar_contraseña").value;
    if (confirmacion != contraseña) {
        confirmacion.setCustomValidity("La contraseña no coindice.");
        confirmacion.reportValidity();
    }
}
