<?php

//Declarando variables
$nombre = $_POST['name'];
$apellido = $_POST['last-name'];
$correo = $_POST['email'];
$mensaje = $_POST['message'];

//formato del mensaje
$mensaje = "Este mensaje fue enviado por: ".$nombre."" .$apellido.",\r\n";
$mensaje = "Su email es: ".$correo.",\r\n";
$mensaje = "Mensaje: ".$_POST['message'].",\r\n";
$mensaje = "Enviado el ".date('d/m/Y', time());


$para = 'teheka1824@jameagle.com';
$asunto = 'Este mail fue enviando desde la web';

mail($para, $asunto, utf8_decode($mensaje), $header);
header("location: index2.html");


?>