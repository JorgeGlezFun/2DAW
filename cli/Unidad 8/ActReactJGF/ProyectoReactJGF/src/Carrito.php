<?php
header("Access-Control-Allow-Origin: *");
$operation = $_GET['operation'];
$input = $_GET['id'];
$productosJson = file_get_contents('datos.json');
$productosObjeto = json_decode($productosJson, true);

$datosCarrito = file_get_contents('datosCarrito.json');
$carrito = json_decode($datosCarrito, true);
$nuevoProducto = $productosObjeto['juegos'][$input];
$productoExiste = false;
foreach ($carrito['carrito'] as $indice => &$productoCarrito) {
    if ($productoCarrito['nombre'] == $nuevoProducto['nombre']) {

        if ($operation == 'add') {
            $productoCarrito['cantidad'] += 1;
        } elseif ($operation == 'remove') {
            if ($productoCarrito['cantidad'] > 0) {
                $productoCarrito['cantidad'] -= 1;
            }
        } elseif ($operation == 'kill') {
            unset($carrito['carrito'][$indice]);
        }

        if ($productoCarrito['cantidad'] <= 0) {
            unset($carrito['carrito'][$indice]);
        }

        $productoExiste = true;
        break;
    }
}
if (!$productoExiste && $operation == 'add') {
    $nuevoProducto['cantidad'] = 1;
    $carrito['carrito'][] = $nuevoProducto;
}
$nuevosDatosJson = json_encode($carrito, JSON_PRETTY_PRINT);
file_put_contents('datosCarrito.json', $nuevosDatosJson);

?>
