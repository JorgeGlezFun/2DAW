document.addEventListener("change", prueba => {
    var checkboxes = document.getElementsByName("Disponibilidad");
    var dia = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            dia = checkboxes[i].value;
        }
    }

    var dia_preferente = document.getElementsByName("pref")[0];
    dia_preferente.value = dia;
});
