document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("flexContainer");
    
    const contenidoFooter = `
        <ul class="footer">
          <li><a href="">Aviso legal</a></li>
          <li><a href="">Términos y condiciones</a></li>
          <li><a href="">Política de privacidad</a></li>
          <li><a href="">Devoluciones</a></li>
          <li><a href="">Formas de pago</a></li>
          <a href=""><img src="./fotos/facebook.png"></a>
          <a href=""><img src="./fotos/instagram.png"></a>
          <a href="https://wa.me/34630414139"><img src="./fotos/whassapp.png"></a>
        </ul>
  
        <p>
          Te atenderemos para cualquier duda, consulta  o reclamación a
          través de:
          <br />
          <img src="./fotos/logomovil.png" alt="logomovil" class="movil" />
          +34 630 414 139
          <br />
          <img src="./fotos/logosobre2.png" alt="logosobre" class="sobre" />
          asul666@gmail.com <br />Lunes 7:00h a 18:00h <br />Martes a Viernes de
          7:00h a 15:00h <br />C/arbesko errota 13, bajo C, Irun
        </p>
  
        <a href="./index.html">
          <img title="logo" class="logotipo2" src="./fotos/logosinfondo.png" alt="peluqueria uisex hair">
        </a>
    `;
  
    footer.innerHTML = contenidoFooter;
  });
  