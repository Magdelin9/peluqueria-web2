document.addEventListener('DOMContentLoaded', function () {
    // Formulario de registro
    const registroForm = document.getElementById('registroForm');

    if (registroForm) {
        registroForm.addEventListener('submit', function (event) {
            const nombre = document.getElementById('registroNombre').value.trim();
            const apellidos = document.getElementById('registroApellidos').value.trim();
            const email = document.getElementById('registroEmail').value.trim();
            const telefono = document.getElementById('registroTelefono').value.trim();
            const contraseña = document.getElementById('registroContraseña').value;
            const repetirContraseña = document.getElementById('registroRepetirContraseña').value;
            const fechaNacimiento = document.getElementById('registroFechaNacimiento').value;

            let errorMessages = [];

            // Validaciones para el formulario de registro
            if (nombre === '') {
                errorMessages.push("El campo de nombre es obligatorio.");
            }
            if (apellidos === '') {
                errorMessages.push("El campo de apellidos es obligatorio.");
            }
            if (!validarEmail(email)) {
                errorMessages.push("El formato del email no es válido.");
            }
            if (!validarNumeroTelefono(telefono)) {
                errorMessages.push("El número de teléfono debe tener 10 dígitos.");
            }
            if (contraseña === '') {
                errorMessages.push("El campo de contraseña es obligatorio.");
            }
            if (contraseña !== repetirContraseña) {
                errorMessages.push("Las contraseñas no coinciden.");
            }
            if (fechaNacimiento === '') {
                errorMessages.push("La fecha de nacimiento es obligatoria.");
            }

            if (errorMessages.length > 0) {
                alert(errorMessages.join('\n'));
                event.preventDefault(); // Evita que el formulario se envíe
            }
        });
    }

    // Formulario de acceso
    const accesoForm = document.getElementById('accesoForm');

    if (accesoForm) {
        accesoForm.addEventListener('submit', function (event) {
            const usuario = document.getElementById('accesoUsuario').value.trim();
            const contraseña = document.getElementById('accesoContraseña').value;

            let errorMessages = [];

            // Validaciones para el formulario de acceso
            if (usuario === '') {
                errorMessages.push("El campo de usuario es obligatorio.");
            }
            if (contraseña === '') {
                errorMessages.push("El campo de contraseña es obligatorio.");
            }

            if (errorMessages.length > 0) {
                alert(errorMessages.join('\n'));
                event.preventDefault(); // Evita que el formulario se envíe
            }
        });
    }

    // Formulario de comentarios
    const comentariosForm = document.getElementById('comentariosForm');

    if (comentariosForm) {
        comentariosForm.addEventListener('submit', function (event) {
            const nombre = document.getElementById('comentariosNombre').value.trim();
            const email = document.getElementById('comentariosEmail').value.trim();
            const mensaje = document.getElementById('comentariosMensaje').value.trim();

            let errorMessages = [];

            // Validaciones para el formulario de comentarios
            if (nombre === '') {
                errorMessages.push("El campo de nombre es obligatorio.");
            }
            if (!validarEmail(email)) {
                errorMessages.push("El formato del email no es válido.");
            }
            if (mensaje === '') {
                errorMessages.push("El campo de mensaje es obligatorio.");
            }

            if (errorMessages.length > 0) {
                alert(errorMessages.join('\n'));
                event.preventDefault(); // Evita que el formulario se envíe
            }
        });
    }

    // Función para validar el formato del email
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Función para validar el número de teléfono
    function validarNumeroTelefono(numeroTelefono) {
        const re = /^\d{10}$/;
        return re.test(numeroTelefono);
    }
});

