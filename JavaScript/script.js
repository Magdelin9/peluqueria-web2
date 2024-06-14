document.addEventListener("DOMContentLoaded", function () {
    const contenido = document.getElementById("container");
    
    const contenidoHTML = `
        <h3>
          La belleza radica en la confianza en uno mismo y en la capacidad de
          expresar tu autenticidad sin miedo.
        </h3>
      
        <p>
          <b>El buen cuidado de nuestro aspecto es clave</b> para sentirnos bien
          por dentro y por fuera. Una piel tersa y reluciente, un cabello sano y
          abundante o una apariencia cuidada nos proporcionan bienestar. En Canal
          Salud Mafre te contamos todo sobre los hábitos, productos y atenciones
          que te ayudan en este propósito.
        </p>
        <p>
          La <b>salud</b> es un pilar fundamental en nuestra vida, de manera que
          debemos mantener una vida saludable que nos permita soportar las cargas
          con el paso de los años.
          <em>Hay una relación muy estrecha entre belleza y salud,</em> de manera
          que la acción de cuidarnos día a día puede producir grandes beneficios
          para nuestra salud. Por eso, también es importante que podamos tener
          contacto con profesionales cualificados, pero también debemos encontrar
          alternativas que nos ayuden a conseguir un buen equilibrio y disfrutar
          de una mayor calidad de vida.
        </p>
    `;
  
    contenido.innerHTML = contenidoHTML;
  });
  




  document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("gridContainer");
    
    const gridHTML = `
      
        <div class="item">
          <img src="./fotos/look.jpg" alt="imagen1" />
        </div>
        <div class="item">
          <img src="./fotos/cortes4.webp" alt="imagen2" />
        </div>
        <div class="item">
          <img src="./fotos/maquillaje.jpg" alt="imagen3" />
        </div>
        <div class="item">
          <img src="./fotos/look2.jpg" alt="imagen6" />
        </div>
        <div class="item">
          <img src="./fotos/look3.jpg" alt="imagen6" />
        </div>
        <div class="item">
          <img src="./fotos/look4.png" alt="imagen6" />
        </div>
        <div class="item">
          <img src="./fotos/cortes.jpg" alt="imagen4" />
        </div>
        <div class="item">
          <img src="./fotos/cortes3.jpg" alt="imagen5" />
        </div>
        <div class="item">
          <img src="./fotos/instalaciones2.jpg" alt="imagen6" />
        </div>
    `;
  
    gridContainer.innerHTML = gridHTML;
  });
  