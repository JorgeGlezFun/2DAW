<?php
    $ciudadesJson = file_get_contents('./U07-A02-Jorge Gonzalez.json');
    $ciudades = json_decode($c, true);

    $input = $_GET['input'];
    $ciudadesSugeridas = [];

    foreach ($ciudades as $ciudad) {
        if (strpos(mb_strtolower($ciudad), mb_strtolower($input)) === 0) {
            $sugerencias[] = $ciudad;
        }
    }

    echo json_encode($ciudadesSugeridas)
?>
