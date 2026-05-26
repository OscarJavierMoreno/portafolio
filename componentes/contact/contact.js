
function initContactForm()
{
    const form = document.querySelector('.contact__form');

    if(!form) return;

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    const nameError = document.querySelector('#name-error');
    const emailError = document.querySelector('#email-error');
    const messageError = document.querySelector('#message-error');

    form.addEventListener('submit', (e) =>
    {
        e.preventDefault();

        let valid = true;

        // LIMPIAR ERRORES
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // NOMBRE
        if(nameInput.value.trim() === '')
        {
            nameError.textContent = '*Ingresa tu nombre';
            valid = false;
        }

        // EMAIL
        if(emailInput.value.trim() === '')
        {
            emailError.textContent = '*Ingresa tu correo';
            valid = false;
        }
        
        else if(!emailInput.value.includes('@'))
        {
            emailError.textContent = '*Correo inválido';
            valid = false;
        }

        // MENSAJE
        if(messageInput.value.trim() === '')
        {
            messageError.textContent = 'Escribe un mensaje';
            valid = false;
        }

        // TODO OK
        if(valid)
        {
            alert('Mensaje enviado 🚀');
            form.reset();
        }
    });
}