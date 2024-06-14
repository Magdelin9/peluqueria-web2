const fondo = document.getElementById('fondoPortada');
const flechaIzquierda = document.getElementById('flechaIzquierda');
const flechaDerecha = document.getElementById('flechaDerecha');
const fotos = [   './fotos/portada.jpg', 
                  './fotos/portada2.png',
                  './fotos/portada3.jpg', 
                  './fotos/portada4.jpg',
                  './fotos/portada5.jpg',
                  ]; // Rutas de las imágenes

let currentIndex = 0;

const cambiarFondo = () => {
  fondoPortada.style.backgroundImage = `url('${fotos[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % fotos.length;
};

const cambiarFondoAnterior = () => {
  currentIndex = (currentIndex - 1 + fotos.length) % fotos.length;
  fondoPortada.style.backgroundImage = `url('${fotos[currentIndex]}')`;
};

// Cambiar fondo cada 5 segundos
const intervalo = setInterval(cambiarFondo, 5000);

// Cambiar fondo inicialmente
cambiarFondo();

// Cambiar fondo al hacer clic en flecha derecha
flechaDerecha.addEventListener('click', () => {
  clearInterval(intervalo);
  cambiarFondo();
});

// Cambiar fondo al hacer clic en flecha izquierda
flechaIzquierda.addEventListener('click', () => {
  clearInterval(intervalo);
  cambiarFondoAnterior();
});

