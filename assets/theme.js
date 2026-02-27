document.addEventListener('DOMContentLoaded', () => {
  console.log('Radar Viajero Theme Loaded 🚀');

  // Ejemplo de interacción simple: Animar header al hacer scroll
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled'); // Añadir sombra o reducir tamaño en CSS
    } else {
      header.classList.remove('scrolled');
    }
  });
});
