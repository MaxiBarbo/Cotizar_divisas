<?php

$usario = $_POST['nombre'];
$mail = $_POST['mail'];
$pass = $_POST['pass'];

if ($usuario === '' || $mail === '' || $pass === ''){
    echo json_encode('llena todos los campos');

} else{
    echo json_encode('correcto: Nombre:' .$usario. 'Mail:'.$mail. 'Pass:'.$pass);
}