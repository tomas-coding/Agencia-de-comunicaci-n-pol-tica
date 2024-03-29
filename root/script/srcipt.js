// Codigo de Tomas

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".fa-bars")
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


//cambio de icono en header

function toggleBurgerIcon() {
  let burguerIcon = document.getElementById('burguer_icon');
  if (burguerIcon.classList.contains('fa-bars')) {
    burguerIcon.classList.remove('fa-bars');
    burguerIcon.classList.add('fa-xmark');
  } else {
    burguerIcon.classList.remove('fa-xmark');
    burguerIcon.classList.add('fa-bars');
  }
}

document.getElementById('burguer_icon').addEventListener('click', toggleBurgerIcon);

//efecto de scroll en header
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY >= 100) {
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }
});

// prueba de efectos scroll
const elementosAnimados = document.querySelectorAll('.fade-in');

const opcionesDeObservacion = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
};

const observador = new IntersectionObserver(function(entries, observador) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animacion-activada');
      observador.unobserve(entry.target);
    }
  });
}, opcionesDeObservacion);

elementosAnimados.forEach(elemento => {
  observador.observe(elemento);
});


// ///////////////////////////Script Jorge
window.addEventListener("load", e => console.log("app.js connected.")
  );
  
const btn = document.getElementById('formButton');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();


   btn.value = 'enviando...';
   

   const serviceID = 'default_service';
   const templateID = 'template_23arrod';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviada';

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

