document.addEventListener("DOMContentLoaded", function() {
    // Variables globales para el carrito y los botones de acción
    let carrito = [];
    const carritoContainer = document.getElementById('carritoContainer');
    const vaciarCarritoBtn = document.querySelector('.vaciarCarrito');
    const comprarProductoBtn = document.querySelector('.comprarProducto');

    // Event listener para el botón de añadir a la cesta
    document.querySelectorAll('#botonAñadir').forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    // Función para agregar un producto al carrito
    function agregarAlCarrito(evento) {
        // Obtener el ID del producto desde el atributo data-product-id
        const productId = evento.target.getAttribute('data-product-id');

        // Verificar el origen del producto y cargar el catálogo correspondiente
        let catalogoURL = "";
        if (window.location.pathname.includes("cabello.html")) {
            catalogoURL = "./JavaScript/catalogo.json";
        } else if (window.location.pathname.includes("accesorios.html")) {
            catalogoURL = "./JavaScript/productos.json";
        }

        // Cargar el catálogo y agregar el producto al carrito
        fetch(catalogoURL)
            .then(response => response.json())
            .then(data => {
                const producto = data.find(producto => producto.id === productId);
                if (producto) {
                    carrito.push(producto);
                    mostrarCarrito();
                }
            })
            .catch(error => console.error("Error al cargar el catálogo:", error));
    }

    // Función para mostrar los productos en el carrito
    function mostrarCarrito() {
        // Limpiar el contenedor del carrito
        carritoContainer.innerHTML = '';

        // Mostrar cada producto en el carrito
        carrito.forEach(producto => {
            const productoElemento = document.createElement('div');
            productoElemento.textContent = producto.titulo;
            carritoContainer.appendChild(productoElemento);
        });
    }

    // Función para vaciar el carrito
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            carrito = [];
            mostrarCarrito();
        });
    }

    // Función para comprar los productos del carrito
    if (comprarProductoBtn) {
        comprarProductoBtn.addEventListener('click', () => {
            // Aquí se puede agregar la lógica para procesar la compra
            // Por ejemplo, enviar una solicitud al servidor para procesar la compra
            if (carrito.length === 0) {
                console.log("El carrito está vacío. No hay productos para comprar.");
                return;
            }

            // Supongamos que la URL de la API para procesar la compra es '/comprar'
            const urlCompra = '/comprar';
            const opcionesCompra = {
                method: 'POST', // Método POST para enviar datos al servidor
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carrito) // Enviar el contenido del carrito como JSON
            };

            // Enviar la solicitud al servidor para procesar la compra
            fetch(urlCompra, opcionesCompra)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`La solicitud de compra falló con el código de estado ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Compra exitosa:", data);
                    // Si es necesario, realizar acciones adicionales después de una compra exitosa
                    // Por ejemplo, redirigir a una página de confirmación de compra
                })
                .catch(error => console.error("Error al procesar la compra:", error));
        });
    }
});





