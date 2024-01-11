function correo_profesor() {
    var correo = document.getElementById("asignatura").value;
    var profesor = correo == "Matematicas" ? "mailto:ricardo@iesdonana.org" :
                   correo == "Lengua" ? "mailto:nacho@iesdonana.org" :
                   correo == "Biologia" ? "mailto:miguelangel@iesdonana.org":
                   correo == "Tecnologia" ? "mailto:rafa@iesdonana.org" :
                   "";
    document.forms["formulario"].action = profesor;
}

