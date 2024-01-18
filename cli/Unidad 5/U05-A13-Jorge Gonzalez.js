document.addEventListener("DOMContentLoaded", function() {
    var dni = document.getElementById("dni");
    dni.addEventListener("blur", () => {
        if (!dni.checkValidity()) {
            dni.value = "";
            dni.setCustomValidity("El DNI introducido no es válido.");
            dni.reportValidity();
        }
    });

    var nombre = document.getElementById("nombre");
    nombre.addEventListener("blur", () => {
        if (!nombre.checkValidity()) {
            nombre.value = "";
            nombre.setCustomValidity("El nombre introducido no es válido.");
            nombre.reportValidity();
        }
    })

    var f_nacimiento = document.getElementById("fecha_nacimiento");
    f_nacimiento.addEventListener("blur", () => {
        if (!f_nacimiento.checkValidity()) {
            f_nacimiento.value = "";
            f_nacimiento.setCustomValidity("La fecha introducida no es válida.");
            f_nacimiento.reportValidity();
        }
    })

    var email = document.getElementById("email");
    email.addEventListener("blur", () => {
        if (!email.checkValidity()) {
            email.value = "";
            email.setCustomValidity("El E-mail introducido no es válido.");
            email.reportValidity();
        }
    })

    var web = document.getElementById("pagina_web");
    web.addEventListener("blur", () => {
        if (!web.checkValidity()) {
            web.value = "";
            web.setCustomValidity("La web introducida no es válida");
            web.reportValidity();
        }
    })

    var contraseña = document.getElementById("contraseña");
    contraseña.addEventListener("blur", () => {
        if (!contraseña.checkValidity()) {
            contraseña.value = "";
            contraseña.setCustomValidity("La contraseña introducida no es válida");
            contraseña.reportValidity();
        }
    })

    var confirmacion = document.getElementById("confirmar_contraseña");
    confirmacion.addEventListener("blur", () => {
        if (confirmacion.value != contraseña.value) {
            confirmacion.setCustomValidity("La contraseña no coindice.");
            confirmacion.reportValidity();
        }
    })
});
