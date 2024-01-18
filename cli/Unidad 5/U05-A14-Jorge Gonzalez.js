var dni = document.getElementById("dni");
console.log(dni);
dni.addEventListener("blur", () => {
    if (!dni.checkValidity()) {
        dni.value = "";
        dni.title = "El DNI introducido no es válido.";
    } else {
        dni.title = "";
        document.cookie = "dni=" + dni.value;
    }
});

var nombre = document.getElementById("nombre");
nombre.addEventListener("blur", () => {
    if (!nombre.checkValidity()) {
        nombre.value = "";
        nombre.title = "El nombre introducido no es válido.";
    } else {
        nombre.title = "";
        document.cookie = "nombre=" + nombre.value;
    }

})

var f_nacimiento = document.getElementById("fecha_nacimiento");
f_nacimiento.addEventListener("blur", () => {
    if (!f_nacimiento.checkValidity()) {
        f_nacimiento.value = "";
        f_nacimiento.title = "La fecha de nacimiento introducida no es válida.";
    } else {
        f_nacimiento.title = "";
        document.cookie = "fecha nacimiento=" + f_nacimiento.value;
    }
})

var email = document.getElementById("email");
email.addEventListener("blur", () => {
    if (!email.checkValidity()) {
        email.value = "";
        email.title = "El email introducido no es válido.";
    } else {
        email.title = "";
        document.cookie = "email=" + email.value;
    }
})

var web = document.getElementById("pagina_web");
web.addEventListener("blur", () => {
    if (!web.checkValidity()) {
        web.value = "";
        web.title = "La página web introducida no es válida.";
    } else {
        web.title = "";
        document.cookie = "web=" + web.value;
    }
})

var contraseña = document.getElementById("contraseña");
contraseña.addEventListener("blur", () => {
    if (!contraseña.checkValidity()) {
        contraseña.value = "";
        contraseña.title = "La contraseña introducida no es válida.";
    } else {
        contraseña.title = "";
        document.cookie = "contraseña=" + contraseña.value;
    }
})

var confirmacion = document.getElementById("confirmar_contraseña");
confirmacion.addEventListener("blur", () => {
    if (confirmacion.value != contraseña.value) {
        confirmacion.title = "La contraseña no coindice.";
    } else {
        confirmacion.title = "";
    }
})

var galletas = document.cookie;
if (galletas != "" || galletas != null){
    document.getElementById("ver").addEventListener('click', () => {
        document.getElementById("cuquis").innerHTML = galletas;
    })
}
