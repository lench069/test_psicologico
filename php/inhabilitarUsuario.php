<?php

//Conexion con la base de datos

require_once ("conexion.php");
$nick = $_GET['nick'];

$insertar_valores = "UPDATE `usuario` SET `ESTADO`= 0 WHERE `NICK` = '$nick'";

		
$retry_value = $db_connection->query($insertar_valores);

   if ($retry_value) {

       echo "true";
           
       //lo que se envia de respuesta al ajax de javascript
  
   }else 
   {
       echo "error"; //lo que se envia de respuesta al ajax de javascript
   }



?>