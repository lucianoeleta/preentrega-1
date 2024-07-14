// Declaración de variables, constantes y arrays
const productos = [
    { id: 1, nombre: "Martillo", precio: 500 },
    { id: 2, nombre: "Clavos", precio: 100 },
    { id: 3, nombre: "Destornillador", precio: 300 },
    { id: 4, nombre: "Serrucho", precio: 800 }
];

let carrito = [];

// Función para mostrar productos disponibles
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach(producto => {
        mensaje += `${producto.id}. ${producto.nombre} - Precio: $${producto.precio}\n`;
    });
    alert(mensaje);
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
    const productoId = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
    const producto = productos.find(p => p.id === productoId);
    
    if (producto) {
        carrito.push(producto);
        alert(`Has agregado ${producto.nombre} al carrito.`);
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Carrito de compras:\n";
        let total = 0;
        carrito.forEach(item => {
            mensaje += `${item.nombre} - Precio: $${item.precio}\n`;
            total += item.precio;
        });
        mensaje += `Total a pagar: $${total}`;
        alert(mensaje);
    }
}

// Función principal
function tiendaFerreteria() {
    let continuar = true;
    while (continuar) {
        const opcion = prompt("Seleccione una opción: \n1. Mostrar productos \n2. Agregar producto al carrito \n3. Mostrar carrito \n4. Salir");
        
        switch (opcion) {
            case '1':
                mostrarProductos();
                break;
            case '2':
                agregarAlCarrito();
                break;
            case '3':
                mostrarCarrito();
                break;
            case '4':
                continuar = !confirm("¿Está seguro de que desea salir?");
                
                break;
            default:
                alert("Opción no válida.");
        }
    }
    alert("Gracias por visitar nuestra ferretería.");
}

// Ejecutar la función principal
tiendaFerreteria();
