// Función para verificar el stock de un producto y dar feedback
function revisarDisponibilidad(producto) {
    return producto.stock > 0 
        ? console.log(`${producto.nombre} está disponible, tenemos ${producto.stock} en stock.`)
        : console.log(`${producto.nombre} está agotado.`);
}

// Lista de productos en la tienda con nombre, precio y stock
const inventarioTienda = [
    { nombre: 'Remera Negra', stock: 2, precio: 300 },
    { nombre: 'Pantalón Cargo', stock: 4, precio: 200 },
    { nombre: 'Zapatillas Blancas', stock: 3, precio: 500 },
    { nombre: 'Campera Verde', stock: 1, precio: 400 }
];

// Imprimir productos disponibles con su stock
console.log('Inventario de la tienda:');
for (let producto of inventarioTienda) {
    revisarDisponibilidad(producto);
}

// Variable para almacenar el costo total de la compra
let totalCompra = 0;

// Ciclo principal de selección de productos
do {
    // Pedir al usuario que ingrese el nombre del producto que desea comprar
    let productoIngresado = prompt('¿Qué producto deseas comprar?');
    let productoEncontrado = false;

    // Usar un ciclo "for" para buscar el producto en el inventario
    for (let i = 0; i < inventarioTienda.length; i++) {
        let productoActual = inventarioTienda[i];

        if (productoActual.nombre.toLowerCase() === productoIngresado.toLowerCase()) {
            productoEncontrado = true;
            if (productoActual.stock > 0) {
                alert(`Has agregado ${productoActual.nombre} al carrito.`);
                totalCompra += productoActual.precio; // Actualizamos el total
                productoActual.stock--; // Reducimos el stock
            } else {
                alert(`${productoActual.nombre} ya no está disponible.`);
            }
            break;
        }
    }

    // Si no se encuentra el producto, mostrar un mensaje
    if (!productoEncontrado) {
        alert('Producto no válido o no encontrado.');
    }

    // Preguntar al usuario si quiere agregar otro producto
    var continuarCompra = prompt('¿Quieres agregar otro producto? (si/no)').toLowerCase();
    
} while (continuarCompra === 'si');

// Mostrar el total de la compra cuando finaliza el ciclo
console.log(`El total de tu compra es: $${totalCompra}`);
