const nav = document.querySelector('#nav');
const abrir = document.querySelector('#iconomenu');
const cerrar = document.querySelector('#CerrarMenu');

abrir.addEventListener('click', () => {
  nav.classList.add('activo');
})

cerrar.addEventListener('click', () => {
  nav.classList.remove('activo');
})