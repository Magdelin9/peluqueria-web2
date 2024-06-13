let productos = "";
  fetch("./JavaScript/productos.json")
        .then(response => response.json())
        .then(data =>  leerProductos(data))

function leerProductos(productos) {
      let aux = "";
      for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        aux += `<div class="caja3"> `;
        aux += `<div class="imagen3"> `;
        aux += ` <img src="${producto.foto}"/> `;
        aux += ` </div> `;
        aux += ` <h3>${producto.titulo}</h3> `;
        aux += `    <p class="parrafo3">${producto.parrafo}</p> `;
        aux += `    <p class="precio3">${producto.precio}</p> `;
        aux += `<a href="carrito.html"><button id="botonAñadir" data-product-id="2">${producto.boton}</button></a> `;
        aux += ` </div> `;
      }
      document.getElementById("grid2").innerHTML = aux;
    };