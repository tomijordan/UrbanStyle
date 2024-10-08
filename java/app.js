
function verificarStock(producto, stock) {
    if (stock > 0) {
        console.log(`${producto} está disponible en stock.`);
    } else {
        console.log(`${producto} está agotado.`);
    }
}


verificarStock('Remera Negra', 10);   
verificarStock('Zapatillas Blancas', 0); 


let productosTienda = ['Remera Negra', 'Pantalón Cargo', 'Zapatillas Blancas', 'Campera Verde'];

console.log('Productos disponibles en la tienda:');
for (let i = 0; i < productosTienda.length; i++) {
    console.log(`${i + 1}. ${productosTienda[i]}`);
}


let totalEnCarrito = 0;
let limiteCarrito = 3;

console.log('Carrito de compras:');
while (totalEnCarrito < limiteCarrito) {
    totalEnCarrito++;
    console.log(`Has agregado ${totalEnCarrito} artículo(s) al carrito.`);
}


let continuarComprando;
do {
    continuarComprando = prompt('¿Deseas agregar más productos al carrito? (si/no)');
} while (continuarComprando === 'si');

console.log('Gracias por tu compra!');


function simuladorDisponibilidad() {
    let producto = prompt('Ingrese el nombre del producto:');
    let stock = parseInt(prompt('Ingrese la cantidad en stock:'));

    if (stock > 0) {
        console.log(`${producto} está disponible en stock.`);
    } else {
        console.log(`${producto} está agotado.`);
    }
}


simuladorDisponibilidad();
