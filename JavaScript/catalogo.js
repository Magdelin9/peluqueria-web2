let catalogo = "";
fetch("./JavaScript/catalogo.json")
     .then(response => response.json())
     .then(data =>  leerCatalogo(data))
     
function leerCatalogo(catalogo) { 
    let aux = "";
    for (let i = 0; i < catalogo.length; i++) { 
    let producto = catalogo[i];
      aux += `<div class="caja3">`;
      aux += `<div class="imagen3">`;
      aux += `<img src="${producto.foto}" alt="${producto.titulo}"/>`;
      aux += `</div>`;
      aux += `<h3>${producto.titulo}</h3>`;
      aux += `<p class="parrafo3">${producto.parrafo}</p>`;
      aux += `<p class="precio3">${producto.precio}</p>`;
      aux += `<a href="carrito.html"><button id="botonAñadir" data-product-id="1">${producto.boton}</button></a>`;
      aux += `</div>`;
    }
    document.getElementById("grid3").innerHTML = aux;
    };
  