// Clase Producto
class Producto {
    constructor(nombre, stock, precio) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }

    // Método para revisar disponibilidad
    revisarDisponibilidad() {
        return this.stock > 0 
            ? `${this.nombre} está disponible, tenemos ${this.stock} en stock.`
            : `${this.nombre} está agotado.`;
    }

    // Método para disminuir el stock
    disminuirStock() {
        if (this.stock > 0) {
            this.stock--;
        }
    }
}

// Función para mostrar los productos disponibles
function mostrarInventario(inventario) {
    return inventario
        .map(p => `${p.nombre} (Stock: ${p.stock}) - $${p.precio}`)
        .join('\n');
}

// Función para buscar un producto por nombre
function buscarProducto(nombreProducto, inventario) {
    return inventario.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
}

// Función de orden superior para aplicar descuentos (ejemplo)
function aplicarDescuento(inventario, porcentaje) {
    return inventario.map(producto => ({
        ...producto,
        precio: producto.precio * (1 - porcentaje / 100)
    }));
}

// Crear el inventario usando la clase Producto
const inventarioTienda = [
    new Producto('Remera Negra', 2, 300),
    new Producto('Pantalón Cargo', 4, 200),
    new Producto('Zapatillas Blancas', 3, 500),
    new Producto('Campera Verde', 1, 400)
];

// Imprimir productos disponibles con su stock
console.log('Inventario de la tienda:');
inventarioTienda.forEach(producto => console.log(producto.revisarDisponibilidad()));

// Variable para almacenar el costo total de la compra
let totalCompra = 0;
let carrito = [];

// Ciclo principal de selección de productos
let continuarCompra = 'si';

do {
    // Mostrar productos disponibles al usuario
    alert('Productos disponibles:\n' + mostrarInventario(inventarioTienda));

    // Pedir al usuario que ingrese el nombre del producto que desea comprar
    let productoIngresado = prompt('¿Qué producto deseas comprar?').trim();

    // Buscar el producto
    let productoEncontrado = buscarProducto(productoIngresado, inventarioTienda);

    if (productoEncontrado) {
        if (productoEncontrado.stock > 0) {
            alert(`Has agregado ${productoEncontrado.nombre} al carrito.`);
            totalCompra += productoEncontrado.precio; // Actualizamos el total
            productoEncontrado.disminuirStock(); // Reducimos el stock
            carrito.push(productoEncontrado); // Agregar al carrito
        } else {
            alert(`${productoEncontrado.nombre} ya no está disponible.`);
        }
    } else {
        alert('Producto no válido o no encontrado.');
    }

    // Preguntar al usuario si quiere agregar otro producto y validar la respuesta
    do {
        continuarCompra = prompt('¿Quieres agregar otro producto? (si/no)').toLowerCase().trim();
    } while (continuarCompra !== 'si' && continuarCompra !== 'no');

} while (continuarCompra === 'si');

// Aplicar un descuento del 10% a todos los productos seleccionados si el total es mayor a $1000
if (totalCompra > 1000) {
    alert('Aplicando descuento del 10% por superar los $1000 en compras.');
    carrito = aplicarDescuento(carrito, 10);
    totalCompra = carrito.reduce((total, producto) => total + producto.precio, 0);
}

// Mostrar el total de la compra
console.log(`El total de tu compra es: $${totalCompra}`);

// Mostrar los productos comprados
console.log('Productos en el carrito:');
carrito.forEach(producto => console.log(`${producto.nombre} - Precio final: $${producto.precio}`));
