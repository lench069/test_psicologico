<?php

//Conexion con la base de datos

require_once ("conexion.php");
$nick = $_GET['nick'];
$password = $_GET['password'];
$numPruebas = $_GET['numPruebas'];
$nombres = $_GET['nombres'];
$apellidos = $_GET['apellidos'];
$celular = $_GET['celular'];
$email = $_GET['email'];

$insertar_valores = "INSERT INTO `usuario`(`NICK`, `COD_TIPO`, `PASWORD`, `ESTADO`, `NUM_PRUEBAS`, 
`NOMBRES`, `APELLIDOS`, `CELULAR`, `EMAIL`) VALUES ('$nick',1,'$password',1,$numPruebas,
'$nombres','$apellidos','$celular','$email')";

		
$retry_value = $db_connection->query($insertar_valores);

   if ($retry_value) {

       echo "true";
           
       //lo que se envia de respuesta al ajax de javascript
  
   }else 
   {
       echo "error"; //lo que se envia de respuesta al ajax de javascript
   }



?>