class Carrito{

    // Añadir el producto al carrito
    comprarProducto(e){
        e.preventDefault();
        if(e.target.ClassList.contains('agregar_carrito')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    leerDatosProducto(producto){
        const infoProducto = {
            nombre : producto.querySelector('.producto_titulo a').textContent,
            precio : producto.querySelector('span .precio_sale_2').textContent,
            stock : producto.querySelector('.detalles span').textContent
        }
        this.insertarCarrito(infoProducto);
    }

    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
            </td>
        `;
        listaProductos.appendChild(row);
    }
}