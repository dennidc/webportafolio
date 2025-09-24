const nav = document.querySelector('#nav');
const abrir = document.querySelector('#iconomenu');
const cerrar = document.querySelector('#CerrarMenu');
const enlaces = document.querySelectorAll('#nav a');
const scrollTopBtn = document.getElementById('scrollTopBtn');
// Abrir menú
abrir.addEventListener('click', () => {
  nav.classList.add('activo');
  document.body.classList.add('no-scroll');
});

// Cerrar menú con el botón de cerrar
cerrar.addEventListener('click', () => {
  nav.classList.remove('activo');
  document.body.classList.remove('no-scroll');
});

// Cerrar menú al dar clic en un enlace
enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    nav.classList.remove('activo');
  });
});

// Cerrar menú al dar clic fuera
document.addEventListener('click', (event) => {
  if (
    nav.classList.contains('activo') &&
    !nav.contains(event.target) &&
    event.target !== abrir
  ) {
    nav.classList.remove('activo');
    document.body.classList.remove('no-scroll'); // Habilita scroll
  }
});

// Efecto scroll suave al hacer clic
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Hace el desplazamiento suave
  });
});