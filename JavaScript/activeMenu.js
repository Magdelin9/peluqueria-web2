document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("cabecera");
    
    const logo = `
      <div class="logo">
        <a href="./index.html">
          <img title="logo" class="logotipo" src="./fotos/logosinfondo.png" alt="peluqueria uisex hair">
        </a>
      </div>
    `;
  
    const menu = `
      <div class="menuRojo">
        <input type="checkbox" id="toggle" />
        <label for="toggle" class="button">
          <img src="./fotos/iconomenu.png" alt="">
        </label>
        <nav class="barra">
          <ul>
            <li><a class="activeLink" href="index2.html">INICIO</a></li>
            <li><a class="activeLink" href="cabello2.html">CABELLO</a></li>
            <li><a class="activeLink" href="accesorios2.html">ACCESORIOS</a></li>
            <li><a class="activeLink" href="servicio2.html">SERVICIO</a></li>
            <li><a class="activeLink" href="registro2.html">ACCESO</a></li>
          </ul>
        </nav>
      </div>
      <div class="menuRojo1">
        <img src="./fotos/iconomenu.png" alt="">
      </div>
    `;
  
    const carrito = `
      <div class="carrito">
        <img src="./fotos/carrito.png" alt="">
      </div>
    `;
  
    header.innerHTML = `${logo}${menu}${carrito}`;
  
    // Añadir la clase de tamaño de pantalla al encabezado
    const barra = window.innerWidth;
    if (barra <= 1000) {
      header.classList.add("small-screen");
    }
    if (barra <= 700) {
      header.classList.add("extra-small-screen");
    }
  
    // Aplicar la clase 'active' al enlace correspondiente
    const aenlaceNav = document.querySelectorAll('.activeLink');
    const actualUrl = window.location.pathname;
    
    enlaceNav.forEach(enlace => {
      if (enlace.getAttribute('href') === actualUrl) {
        enlace.classList.add('active');
      }
    });
  });
  