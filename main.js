// Selecciona el botón por su ID
const button = document.querySelector('#miBoton');

// Agrega un evento click al botón
button.addEventListener('click', () => {
  // Selecciona el elemento donde se mostrará el mensaje
  const messageContainer = document.querySelector('#message');

  // Crea un elemento de texto con el mensaje
  const message = document.createTextNode('¡Hola!');

  // Agrega el texto al contenedor del mensaje
  messageContainer.appendChild(message);

  // Cambia el texto del botón
  button.textContent = 'Mensaje enviado';

  // Agrega una clase CSS al botón
  button.classList.add('sent');
});
