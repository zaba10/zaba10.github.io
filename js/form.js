let form = document.getElementById('contact-form');//obtiene el elemento del formulario de contacto en el documento HTML 

form.addEventListener('submit', function(event){//adjunta un evento de "submit" al formulario
  event.preventDefault(); //evita que el formulario se envíe de forma predeterminada

  //se obtienen los valores de los campos del formulario
  let name = form.elements.name.value;
  let email = form.elements.email.value;
  let message = form.elements.message.value;
  console.log(`Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`);//muestra los valores de los campos
  form.reset();//restablece el formulario

  let confirmationMsg = document.createElement('p');// crea un elemento <p> con un mensaje de confirmación 
  confirmationMsg.textContent = '¡Mensaje enviado!';
  confirmationMsg.style.color = 'green';
  form.appendChild(confirmationMsg);

  setTimeout(() => {//elimina el mensaje de confirmación después de tres segundos
    confirmationMsg.remove();
  }, 3000);
});