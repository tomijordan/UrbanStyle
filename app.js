// Algoritmo con condicional if: Verificar si un producto en oferta tiene un descuento mayor al 20%
function verificarDescuento(producto, descuento) {
    if (descuento >= 20) {
        console.log(`${producto} tiene un descuento especial del ${descuento}%. ¡Aprovecha la oferta!`);
    } else {
        console.log(`${producto} tiene un descuento estándar del ${descuento}%.`);
    }
}

// Ejemplo de uso
verificarDescuento('Remera Negra', 25);  // Descuento especial
verificarDescuento('Pantalón Cargo', 15); // Descuento estándar

// Algoritmo con ciclo for: Listar los productos en oferta
let productosOfertas = ['Remera Negra', 'Zapatillas Blancas', 'Pantalón Cargo', 'Campera Verde'];

console.log('Productos en oferta:');
for (let i = 0; i < productosOfertas.length; i++) {
    console.log(`${i + 1}. ${productosOfertas[i]}`);
}

// Algoritmo con ciclo while: Simular la adición de productos en oferta al carrito
let articulosEnOferta = 0;
let maxArticulos = 3;

console.log('Agregando productos en oferta al carrito:');
while (articulosEnOferta < maxArticulos) {
    articulosEnOferta++;
    console.log(`Has agregado ${articulosEnOferta} artículo(s) en oferta al carrito.`);
}

// Algoritmo con ciclo do while: Simular si el usuario desea continuar buscando más ofertas
let buscarMasOfertas;
do {
    buscarMasOfertas = prompt('¿Deseas seguir buscando más ofertas? (si/no)');
} while (buscarMasOfertas === 'si');

console.log('¡Gracias por visitar nuestra sección de ofertas!');

// Simulador interactivo: Ingresar un producto y su descuento para verificar si es una oferta especial
function simuladorOfertas() {
    let producto = prompt('Ingrese el nombre del producto en oferta:');
    let descuento = parseFloat(prompt('Ingrese el porcentaje de descuento:'));

    if (descuento >= 20) {
        console.log(`${producto} tiene un descuento especial del ${descuento}%. ¡Aprovecha la oferta!`);
    } else {
        console.log(`${producto} tiene un descuento estándar del ${descuento}%.`);
    }
}

// Llamada al simulador interactivo
simuladorOfertas();
