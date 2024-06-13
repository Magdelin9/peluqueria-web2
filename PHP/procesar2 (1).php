<?php
if (isset($_POST['usuario'])) {
$usuario = $_POST['usuario'];
echo "usuario: " . $usuario . "<br>";
}
?>
<?php
if (isset($_POST['contraseña'])) {
$contraseña = $_POST['contraseña'];
echo "usuario: " . $contraseña . "<br>";
}
?>
<?php
else {
    echo "<p>Error</p>";
    echo "<p>Todos los campos son obligatorios</p>";
}
?>

<?php
if (isset($_POST['nombre'])) {
$nombre = $_POST['nombre'];
echo "nombre: " . $nombre . "<br>";
}
?>
<?php
if (isset($_POST['email'])) {
$email = $_POST['email'];
echo "email: " . $email . "<br>";
}
?>
<?php
if (isset($_POST['mensaje'])) {
$mensaje = $_POST['mensaje'];
echo "mensaje: " . $mensaje . "<br>";
}
?>
<?php
if (isset($_POST['apellidos'])) {
$apellidos = $_POST['apellidos'];
echo "apellidos: " . $apellidos . "<br>";
}
?>
<?php
if (isset($_POST['telefono'])) {
$telefono = $_POST['telefono'];
echo "telefono: " . $telefono . "<br>";
}
?>
<?php
if (isset($_POST['repetirContraseña'])) {
$repetirContraseña = $_POST['repetirContraseña'];
echo "repetirContraseña: " . $repetirContraseña . "<br>";
}
?>
<?php
if (isset($_POST['fechaNacimiento'])) {
$fechaNacimiento = $_POST['fechaNacimiento'];
echo "fechaNacimiento: " . $fechaNacimiento . "<br>";
}
?>