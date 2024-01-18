document.addEventListener("DOMContentLoaded", function() {
    var dni = document.getElementById("dni");
    dni.addEventListener("blur", () => {
        if (!dni.checkValidity()) {
            dni.value = "";
        }
    });

    var nombre = document.getElementById("nombre");
    nombre.addEventListener("blur", () => {
        if (!nombre.checkValidity()) {
            nombre.value = "";
        }
    })

    var f_nacimiento = document.getElementById("fecha_nacimiento");
    f_nacimiento.addEventListener("blur", () => {
        if (!f_nacimiento.checkValidity()) {
            f_nacimiento.value = "";
        }
    })

    var email = document.getElementById("email");
    email.addEventListener("blur", () => {
        if (!email.checkValidity()) {
            email.value = "";
        }
    })

    var web = document.getElementById("pagina_web");
    web.addEventListener("blur", () => {
        if (!web.checkValidity()) {
            web.value = "";
        }
    })

    var contraseña = document.getElementById("contraseña");
    contraseña.addEventListener("blur", () => {
        if (!contraseña.checkValidity()) {
            contraseña.value = "";
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
