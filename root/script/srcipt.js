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


// Script Jorge
window.addEventListener("load", e => console.log("app.js connected.")
  );
  
let sendBtn = document.getElementById("sendBtn");
let clearBtn = document.getElementById("clearBtn");

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("boton Enviar Presionado")
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

