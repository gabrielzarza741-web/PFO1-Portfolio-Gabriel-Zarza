const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Contacto desde el portafolio: ${data.get('nombre').trim()}`;
  const body = `Nombre: ${data.get('nombre').trim()}\nCorreo: ${data.get('correo').trim()}\n\n${data.get('mensaje').trim()}`;
  document.querySelector('#form-status').textContent = 'Se solicitó abrir tu aplicación de correo. El mensaje todavía no fue enviado. Si no se abre, usá el enlace de correo.';
  window.location.href = `mailto:gabrielzarza741@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
