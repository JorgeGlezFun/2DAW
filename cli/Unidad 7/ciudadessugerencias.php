<?php
// Coge el json
$archivoJson = file_get_contents('U07-A02-Jorge Gonzalez.json');

// Convierte el json en un objeto
$objetoJson = json_decode($archivoJson, true);

// Sacamos especificamente las ciudadades del archivo Json
$ciudades = $objetoJson['ciudades'];

// Recoge los datos del input
$input = $_GET['input'];

// Array que se usa para guardar las sugerencias
$sugerencias = [];

// Haciendo uso del Json como objeto, lo iteramos para sacar cada ciudad
foreach ($ciudades as $ciudad) {
    // Según la posicion de la letra, si coincide con alguna iteracion, lo añade al array
    if (strpos(strtolower($ciudad), strtolower($input)) === 0) {
        $sugerencias[] = $ciudad;
    }
}

// Devuelve el json como un string
echo json_encode($sugerencias);
?>
