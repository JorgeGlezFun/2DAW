document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ciudad').addEventListener('input', function() {
        var inputText = this.value;
        if (inputText.length) {
            fetch('ciudadessugerencias.php?input=' + inputText)
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Error en la respuesta de la solicitud.');
                    }
                    return response.json();
                })
                .then(function(data) {
                    sugerencias(data);
                })
                .catch(function(error) {
                    console.error('Error en la solicitud:', error);
                });
        } else {
            document.getElementById('sugerencias').innerHTML = '';
        }
    });

    function sugerencias(sugerencias) {
        var listaSugerencias = document.getElementById('sugerencias');
        listaSugerencias.innerHTML = '';
        sugerencias.forEach(function(ciudad) {
            var li = document.createElement('li');
            var textoLi = document.createTextNode(ciudad);
            li.appendChild(textoLi);
            listaSugerencias.appendChild(li);
        });
    }
});
