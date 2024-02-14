document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('ciudad').addEventListener('input', ()=>{
        var texto = this.value;
        if (texto.length) {
            fetch('ciudadessugerencias.php?input=' + texto);
                .then((respuesta)=>{
                    if (!respuesta.ok){
                        return true
                    }
                    return respuesta.json();
                });

                .then((dato)=>{
                    sugerencias(dato);
                });

                .catch((error)=>{
                    console.error('Error en la solicitud',error);
                });
        } else {
            document.getElementById('sugerencias').innerHTML = '';
        }
    })
})
ciudades()
