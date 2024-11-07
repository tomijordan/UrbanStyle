class Producto {
    constructor(nombre, stock, precio, imagen) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const inventarioTienda = [
    new Producto('Remera HitHot gris', 2, 300, '../assets/remera 2.webp'),
    new Producto('Remera Vans blanca', 5, 350, '../assets/remera vans (3).webp'),
    new Producto('Remera Topper gris', 3, 400, '../assets/remera topper (4).jpg'),
    new Producto('Pantalón cargo azul', 4, 500, '../assets/pantalon 2.jpg'),
    new Producto('Pantalón negro', 6, 550, '../assets/pantalon negro 3.webp'),
    new Producto('Pantalón gris', 2, 450, '../assets/pantalon gris 4.jpg'),
    new Producto('Buzo oversize negro', 3, 600, '../assets/buzo negro 1.jpeg'),
    new Producto('Buzo oversize blanco', 2, 700, '../assets/buzo blanco 2.jpg'),
    new Producto('Buzo oversize marrón', 4, 750, '../assets/buzo marron 3.webp')
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let totalCompra = carrito.reduce((total, prod) => total + prod.precio, 0);
const productContainer = document.getElementById('product-list');
const carritoLista = document.getElementById('carrito-lista');
const totalCompraDisplay = document.getElementById('total-compra');
const finalizarCompraBtn = document.getElementById('finalizar-compra');

function actualizarCarrito() {
    carritoLista.innerHTML = '';
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-danger btn-sm';
        removeBtn.textContent = 'Eliminar';
        removeBtn.addEventListener('click', () => {
            carrito.splice(index, 1);
            totalCompra -= producto.precio;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
        });
        li.appendChild(removeBtn);
        carritoLista.appendChild(li);
    });
    totalCompraDisplay.textContent = `Total: $${totalCompra}`;
}

function agregarAlCarrito(producto) {
    if (producto.stock > 0) {
        carrito.push(producto);
        totalCompra += producto.precio;
        producto.stock--;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    } else {
        alert(`${producto.nombre} está agotado`);
    }
}

function finalizarCompra() {
    if (carrito.length > 0) {
        carrito = [];
        totalCompra = 0;
        localStorage.removeItem('carrito');
        actualizarCarrito();
        alert('¡Compra finalizada con éxito! Gracias por tu compra.');
    } else {
        alert('El carrito está vacío.');
    }
}

finalizarCompraBtn.addEventListener('click', finalizarCompra);

inventarioTienda.forEach(producto => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = producto.imagen;
    img.className = 'card-img-top img-resize';
    img.alt = producto.nombre;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = producto.nombre;

    const price = document.createElement('p');
    price.className = 'card-text';
    price.textContent = `$${producto.precio}`;

    const select = document.createElement('select');
    select.className = 'form-select my-2';
    ['S', 'M', 'L', 'XL'].forEach(talle => {
        const option = document.createElement('option');
        option.value = talle;
        option.textContent = talle;
        select.appendChild(option);
    });

    const addButton = document.createElement('button');
    addButton.className = 'btn btn-primary';
    addButton.textContent = 'Comprar';
    addButton.addEventListener('click', () => agregarAlCarrito(producto));

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(select);
    cardBody.appendChild(addButton);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    productContainer.appendChild(col);
});

actualizarCarrito();
