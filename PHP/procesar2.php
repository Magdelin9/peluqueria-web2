<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $form_type = $_POST['form'];

  switch ($form_type) {
    case 'acceso':
      if (isset($_POST['usuario']) && isset($_POST['contrasena'])) {
        $usuario = htmlspecialchars($_POST['usuario']);
        $contrasena = htmlspecialchars($_POST['contrasena']);
        echo "Usuario: $usuario<br>";
        echo "Contraseña: $contrasena<br>";
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
      if (isset($_POST['nombre_reg']) && isset($_POST['apellidos']) && isset($_POST['email_reg']) && isset($_POST['telefono']) && isset($_POST['contrasena_reg']) && isset($_POST['repetir_contrasena']) && isset($_POST['fecha_nacimiento'])) {
        $nombre_reg = htmlspecialchars($_POST['nombre_reg']);
        $apellidos = htmlspecialchars($_POST['apellidos']);
        $email_reg = htmlspecialchars($_POST['email_reg']);
        $telefono = htmlspecialchars($_POST['telefono']);
        $contrasena_reg = htmlspecialchars($_POST['contrasena_reg']);
        $repetir_contrasena = htmlspecialchars($_POST['repetir_contrasena']);
        $fecha_nacimiento = htmlspecialchars($_POST['fecha_nacimiento']);

        if ($contrasena_reg === $repetir_contrasena) {
          echo "Nombre: $nombre_reg<br>";
          echo "Apellidos: $apellidos<br>";
          echo "Email: $email_reg<br>";
          echo "Teléfono: $telefono<br>";
          echo "Fecha de nacimiento: $fecha_nacimiento<br>";
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

