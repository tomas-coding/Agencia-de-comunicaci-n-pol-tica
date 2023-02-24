const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
//efecto de scroll en header
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY >= 100) {
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }
});