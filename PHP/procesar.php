<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $formType = $_POST['form'];

    switch ($formType) {
        case 'acceso':
            if (isset($_POST['usuario']) && isset($_POST['contraseña'])) {
                $usuario = htmlspecialchars($_POST['usuario']);
                $contraseña = htmlspecialchars($_POST['contraseña']);
                echo "Usuario: $usuario<br>";
                echo "Contraseña: $contraseña<br>";
            } else {
                echo "<p>Error: Todos los campos son obligatorios</p>";
            }
            break;

        case 'comentarios':
            if (isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['mensaje'])) {
                $nombre = htmlspecialchars($_POST['nombre']);
                $email = htmlspecialchars($_POST['email']);
                $mensaje = htmlspecialchars($_POST['mensaje']);
                echo "Nombre: $nombre<br>";
                echo "Email: $email<br>";
                echo "Mensaje: $mensaje<br>";
            } else {
                echo "<p>Error: Todos los campos son obligatorios</p>";
            }
            break;

        case 'registro':
            if (isset($_POST['registroNombre']) && isset($_POST['registroApellidos']) && isset($_POST['registroEmail']) && isset($_POST['registroTelefono']) && isset($_POST['registroContraseña']) && isset($_POST['registroRepetirContraseña']) && isset($_POST['registroFechaNacimiento'])) {
                $nombre = htmlspecialchars($_POST['registroNombre']);
                $apellidos = htmlspecialchars($_POST['registroApellidos']);
                $email = htmlspecialchars($_POST['registroEmail']);
                $telefono = htmlspecialchars($_POST['registroTelefono']);
                $contraseña = htmlspecialchars($_POST['registroContraseña']);
                $repetirContraseña = htmlspecialchars($_POST['registroRepetirContraseña']);
                $fechaNacimiento = htmlspecialchars($_POST['registroFechaNacimiento']);

                if ($contraseña === $repetirContraseña) {
                    echo "Nombre: $nombre<br>";
                    echo "Apellidos: $apellidos<br>";
                    echo "Email: $email<br>";
                    echo "Teléfono: $telefono<br>";
                    echo "Fecha de nacimiento: $fechaNacimiento<br>";
                } else {
                    echo "<p>Error: Las contraseñas no coinciden</p>";
                }
            } else {
                echo "<p>Error: Todos los campos son obligatorios</p>";
            }
            break;

        default:
            echo "<p>Error: Formulario no reconocido</p>";
    }
}
?>
