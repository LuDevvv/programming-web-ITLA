  // Obtener referencias a los elementos del formulario
  const form = document.getElementById('registroForm');
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const cedulaInput = document.getElementById('cedula');
  const generoSelect = document.getElementById('genero');
  const direccionInput = document.getElementById('direccion');
  const ocupacionInput = document.getElementById('ocupacion');

  // Agregar eventos de escucha para validar los campos en tiempo real
  nombreInput.addEventListener('input', validarNombre);
  emailInput.addEventListener('input', validarEmail);
  cedulaInput.addEventListener('input', validarCedula);
  generoSelect.addEventListener('change', validarGenero);
  direccionInput.addEventListener('input', validarDireccion);
  ocupacionInput.addEventListener('input', validarOcupacion);

  // Funciones de validación
  function validarNombre() {
    if (nombreInput.value.trim() === '') {
      mostrarError(nombreInput, 'El nombre es obligatorio');
    } else {
      mostrarExito(nombreInput);
    }
  }

  function validarEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      mostrarError(emailInput, 'El email es obligatorio');
    } else if (!emailRegex.test(email)) {
      mostrarError(emailInput, 'El email ingresado no es válido');
    } else {
      mostrarExito(emailInput);
    }
  }

  function validarCedula() {
    if (cedulaInput.value.trim() === '') {
      mostrarError(cedulaInput, 'La cédula es obligatoria');
    } else {
      mostrarExito(cedulaInput);
    }
  }

  function validarGenero() {
    if (generoSelect.value === 'Seleccione') {
      mostrarError(generoSelect, 'Debe seleccionar un género');
    } else {
      mostrarExito(generoSelect);
    }
  }

  function validarDireccion() {
    if (direccionInput.value.trim() === '') {
      mostrarError(direccionInput, 'La dirección es obligatoria');
    } else {
      mostrarExito(direccionInput);
    }
  }

  function validarOcupacion() {
    if (ocupacionInput.value.trim() === '') {
      mostrarError(ocupacionInput, 'La ocupación es obligatoria');
    } else {
      mostrarExito(ocupacionInput);
    }
  }

  // Funciones auxiliares
  function mostrarError(input, mensaje) {
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.textContent = mensaje;
    
    const parent = input.parentNode;
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
      parent.removeChild(existingError);
    }
    
    parent.appendChild(errorSpan);
    input.classList.add('error');
  }

  function mostrarExito(input) {
    const parent = input.parentNode;
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
      parent.removeChild(existingError);
    }
    
    input.classList.remove('error');
  }

  // Validar el formulario antes de enviarlo
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario si hay errores
    
    validarNombre();
    validarEmail();
    validarCedula();
    validarGenero();
    validarDireccion();
    validarOcupacion();
    
    // Si no hay campos con error, se puede enviar el formulario
    if (!form.querySelector('.error-message')) {
      form.submit();
    }
  });