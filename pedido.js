const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('categoria_procesadores');
const listaProductos = document.querySelector('#lista_carrito tbody');

cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});
}