<?php
header("Access-Control-Allow-Origin: *");
$input = $_GET['id'];
$productosJson = file_get_contents('datos.json');
$productosObjeto = json_decode($productosJson, true);
$datosCarrito = file_get_contents('datosCarrito.json');
$carrito = json_decode($datosCarrito, true);

$nuevoProducto = $productosObjeto['juegos'][$input];

$productoExiste = false;
foreach ($carrito['carrito'] as &$productoCarrito) {
    if ($productoCarrito['nombre'] == $nuevoProducto['nombre']) {
        $productoCarrito['cantidad'] += 1;
        $productoExiste = true;
        break;
    }
}

if (!$productoExiste) {
    $carrito['carrito'][] = $nuevoProducto;
}

file_put_contents('carrito.json', json_encode($carrito));

echo "El valor de \$input es: " . $input . "<br>"
?>
