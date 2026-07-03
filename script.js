/* =============================================================
   CURSO DE ESTÁNDARES DE CODIFICACIÓN - SCRIPT.JS
   ============================================================= */

// ====== DATOS DE LAS CLASES ======
// IMPORTANTE: Cambia la propiedad "file" de cada semana por la ruta
// real de tu PDF o Word. Ejemplo: 'recursos/semana1.pdf'
const weeks = [
  { week: 'Semana 1', title: 'Introducción a los estándares de codificación', desc: 'Qué son los estándares de codificación y por qué toda organización de software los necesita para mantener un código uniforme.'},
  { week: 'Semana 2', title: 'Herramientas de validación de código', desc: 'Linters, formatters y otras herramientas que verifican automáticamente que el código cumpla con los estándares definidos.'},
  { week: 'Semana 3', title: 'Consideraciones generales para la nomenclatura', desc: 'Criterios generales a tomar en cuenta antes de nombrar variables, funciones, clases y archivos en un proyecto.'},
  { week: 'Semana 4', title: 'Estándares de nombres descriptivos y significativos', desc: 'Cómo elegir nombres claros que expliquen por sí solos el propósito de cada elemento del código.'},
  { week: 'Semana 5', title: 'Estándares de diseño y programación', desc: 'Principios de diseño que guían la estructura del código antes y durante la programación.'},
  { week: 'Semana 6', title: 'Estándares de buenas prácticas en Codificación', desc: 'Recomendaciones para escribir código limpio, ordenado y fácil de mantener en el día a día.'},
  { week: 'Semana 7', title: 'Estándares de buenas prácticas en Codificación', desc: 'Continuación de las buenas prácticas de codificación, aplicadas a casos y ejemplos más avanzados.'},
  { week: 'Semana 8', title: 'Estándares de Codificación repetitiva', desc: 'Cómo identificar y evitar código duplicado mediante reutilización y modularización.'},
  { week: 'Semana 9', title: 'Estándares de errores y manejo de excepciones', desc: 'Buenas prácticas para detectar, reportar y manejar errores de forma ordenada dentro del código.'},
  { week: 'Semana 10', title: 'Estándares de programación', desc: 'Repaso integral de los estándares de programación vistos durante el curso y su aplicación conjunta.'},
  { week: 'Semana 11', title: 'Estándares de Modulazación y Reutilizacion.', desc: ''},
  { week: 'Semana 12', title: 'Consideraciones de Optimización y Rendimiento.', desc: ''},
  { week: 'Semana 13', title: 'Estándares para la Documentación.', desc: ''},
  { week: 'Semana 14', title: 'Estándares de Seguridad del sofware.', desc: ''},
  { week: 'Semana 15', title: 'Estándares de programación', desc: '' },
  { week: 'Semana 16', title: 'Estándares de programación', desc: 'Repaso integral de los estándares de programación vistos durante el curso y su aplicación conjunta.'}
];

// ====== GENERAR TARJETAS DE CLASES ======
const grid = document.getElementById('clasesGrid');

weeks.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'clase-card fade-in';

  card.innerHTML = `
  <span class="clase-card__week">${item.week}</span>
  <h3 class="clase-card__title">${item.title}</h3>
  <p class="clase-card__desc">${item.desc}</p>
`;

  grid.appendChild(card);
});

// ====== CAMBIO DE TEMA (OSCURO / CLARO) ======
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const savedTheme = localStorage.getItem('theme');

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light');
    themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('light');
    themeIcon.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

// Aplicar tema guardado
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme('dark');
}

themeBtn.addEventListener('click', () => {
  const isLight = document.body.classList.contains('light');
  setTheme(isLight ? 'dark' : 'light');
});

// ====== MENÚ RESPONSIVE ======
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('open');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.header__nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    nav.classList.remove('open');
  });
});

// ====== BOTÓN VOLVER ARRIBA ======
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ====== ANIMACIONES AL HACER SCROLL (FADE-IN) ======
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach((el) => observer.observe(el));

// ====== VALIDACIÓN DEL FORMULARIO ======
const form = document.getElementById('contactForm');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const nombreError = document.getElementById('nombreError');
const correoError = document.getElementById('correoError');
const mensajeError = document.getElementById('mensajeError');

function validateNombre() {
  const val = nombre.value.trim();
  if (val.length < 3) {
    nombre.classList.add('error');
    nombreError.classList.add('visible');
    return false;
  }
  nombre.classList.remove('error');
  nombreError.classList.remove('visible');
  return true;
}

function validateCorreo() {
  const val = correo.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) {
    correo.classList.add('error');
    correoError.classList.add('visible');
    return false;
  }
  correo.classList.remove('error');
  correoError.classList.remove('visible');
  return true;
}

function validateMensaje() {
  const val = mensaje.value.trim();
  if (val.length < 10) {
    mensaje.classList.add('error');
    mensajeError.classList.add('visible');
    return false;
  }
  mensaje.classList.remove('error');
  mensajeError.classList.remove('visible');
  return true;
}

// Validar en tiempo real
nombre.addEventListener('input', validateNombre);
correo.addEventListener('input', validateCorreo);
mensaje.addEventListener('input', validateMensaje);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isNombreOk = validateNombre();
  const isCorreoOk = validateCorreo();
  const isMensajeOk = validateMensaje();

  if (isNombreOk && isCorreoOk && isMensajeOk) {
    showToast('✅ Mensaje enviado correctamente. ¡Gracias!', 'success');
    form.reset();
    // Limpiar estados de error
    [nombre, correo, mensaje].forEach((el) => el.classList.remove('error'));
    [nombreError, correoError, mensajeError].forEach((el) => el.classList.remove('visible'));
  } else {
    showToast('❌ Corrige los errores antes de enviar.', 'error');
  }
});

// ====== TOAST (MENSAJE EMERGENTE) ======
const toast = document.getElementById('toast');
let toastTimeout;

function showToast(message, type = 'success') {
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.className = 'toast show ' + type;

  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ====== AÑO ACTUAL EN EL PIE DE PÁGINA ======
document.getElementById('year').textContent = new Date().getFullYear();