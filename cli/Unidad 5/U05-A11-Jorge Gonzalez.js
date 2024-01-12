document.addEventListener("change", colour=> {
    var colores = document.getElementsByName("color");
    var color = "";

    for (var i = 0; i < colores.length; i++) {
        if (colores[i].checked) {
            color = colores[i].value;
        }
    }

    document.body.style.backgroundColor = color;
})
