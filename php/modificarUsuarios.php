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

$insertar_valores = "UPDATE `usuario` SET `PASWORD`='$password',`ESTADO`=1,`NUM_PRUEBAS`='$numPruebas',
`NOMBRES`='$nombres',`APELLIDOS`='$apellidos',`CELULAR`='$celular',`EMAIL`='$email' WHERE nick = '$nick'";

		
$retry_value = $db_connection->query($insertar_valores);

   if ($retry_value) {

       echo "true";
           
       //lo que se envia de respuesta al ajax de javascript
  
   }else 
   {
       echo "error"; //lo que se envia de respuesta al ajax de javascript
   }



?>