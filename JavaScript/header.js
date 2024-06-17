document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("cabecera");

  const logo = `
    <div class="logo">
      <a href="index.html">
        <img title="logo" class="logotipo" src="./fotos/logosinfondo.png" alt="peluqueria unisex hair">
      </a>
    </div>
  `;

  const reservar = `
    <div class="reserva1">
      <button>
        <a href="registro2.html">Reservar cita</a>
      </button>
    </div>
  `;

  const menu = `
    <div class="menuRojo">
      <nav class="barra">
        <ul>
          <li><a href="index.html">INICIO</a></li>
          <li><a href="cabello.html">CABELLO</a></li>
          <li><a href="accesorios.html">ACCESORIOS</a></li>
          <li><a href="servicio.html">SERVICIO</a></li>
          <li><a href="registro.html">ACCESO</a></li>
        </ul>
      </nav>
    </div>
  `;
  const menuRojo1 = `
      <div class="menuRojo1">
        <input type="checkbox" id="toggle" />
        <label for="toggle" class="button">
          <img src="./fotos/iconomenu.png" alt="Menu">
        </label>
        <nav class="barra">
          <ul>
            <li><a href="index.html">INICIO</a></li>
            <li><a href="cabello.html">CABELLO</a></li>
            <li><a href="accesorios.html">ACCESORIOS</a></li>
            <li><a href="servicio.html">SERVICIO</a></li>
            <li><a href="registro.html">ACCESO</a></li>
          </ul>
        </nav>
      </div>
`;

  const carrito = `
    <div id="carrito">
     <a href="carrito.html"><img src="./fotos/carrito.png" alt="carrito de compras"></a>
    </div>
  `;

  header.innerHTML = `${logo}${reservar}${menu}${carrito}${menuRojo1}`;

  const barra = window.innerWidth;
  if (barra <= 1000) {
      header.classList.add("small-screen");
  }
  if (barra <= 700) {
     header.classList.add("extra-small-screen");
 }
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtener la URL actual
  const currentUrl = window.location.pathname.split("/").pop();

  // Obtener todos los enlaces del menú de navegación
  const menuLinks = document.querySelectorAll(".barra a");

  // Iterar sobre los enlaces y añadir la clase 'active' al enlace correspondiente
  menuLinks.forEach(link => {
      // Obtener el href del enlace y extraer solo la parte del archivo
      const linkUrl = link.getAttribute("href").split("/").pop();

      // Comparar el href del enlace con la URL actual
      if (linkUrl === currentUrl) {
          link.classList.add("active");
      }
  });
});




 