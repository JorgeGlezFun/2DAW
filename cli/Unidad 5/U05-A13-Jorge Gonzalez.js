
var dn = document.getElementById("dni");
console.log(dn);
dn.addEventListener('blur', () => {
    if(!dn.checkValidity()) {
        dn.value = "";
        dn.setCustomValidity("El DNI introducido no es válido.");

    }
});

function validaNombre() {
    nombre = document.getElementById("nombre");
    if (!nombre.checkValidity()) {
        nombre.value = "";
        nombre.setCustomValidity("El nombre introducido no es válido.");
        nombre.reportValidity();
    }
}


function validaNacimiento() {
    f_nacimiento = document.getElementById("fecha_nacimiento");
    if (!f_nacimiento.checkValidity()){
        f_nacimiento.value = "";
        f_nacimiento.setCustomValidity("La fecha introducida no es válida.");
        f_nacimiento.reportValidity();
    }
}

function validaEmail() {
    email = document.getElementById("email");
    if (!email.checkValidity()){
        email.setCustomValidity("El E-mail introducido no es válido.");
        email.reportValidity();
        email.value = "";
    }
}

function validaWeb() {
    web = document.getElementById("pagina_web");
    if (!web.checkValidity()){
        web = "";
        web.setCustomValidity("La web introducida no es válida");
        web.reportValidity();
    }
}

function validaContrasena() {
    contraseña = document.getElementById("contraseña");
    if (!contraseña.checkValidity()){
        contraseña.setCustomValidity("La contraseña introducida no es válida");
        contraseña.reportValidity();
        contraseña = "";
    }
}

function confirma_contrasenas(){
    contraseña = document.getElementById("contraseña").value;
    confirmacion = document.getElementById("confirmar_contraseña").value;
    if (confirmacion != contraseña){
        confirmacion.setCustomValidity("La contraseña no coindice.");
    }
}
