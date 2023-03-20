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


// Script Jorge
window.addEventListener("load", e => console.log("app.js connected.")
  );
  
let clearBtn = document.getElementById("clearBtn");

// sendBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("boton Enviar Presionado")
//   const name = document.getElementById("inputNombre").value;
//   const message = document.getElementById("inputMessage").value;
//   console.log(name);
//   console.log(message);
// });

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_23arrod';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



clearBtn.addEventListener("click", (e) => {
    // declaro inputs
    let inputNombre = document.getElementById("inputNombre");
    let inputEmail = document.getElementById("inputEmail");
    let inputCelphone = document.getElementById("inputCelphone")
    let inputMessage = document.getElementById("inputMessage")
    e.preventDefault();
    console.log("boton borrar Presionado");

    // clear all inputs
    inputNombre.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
    inputCelphone.value = "";

// agregar aqui una notificacion

});





