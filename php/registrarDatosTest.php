<?php

//Conexion con la base de datos

require_once ("conexion.php");
$nick = $_GET['nick'];
$nombre = $_GET['nombre'];
$cedula = $_GET['cedula'];
$genero = $_GET['genero'];
$edad = $_GET['edad'];
$tiempo_enfermedad = $_GET['tiempo_enfe'];
$fecha = $_GET['fecha'];



$insertar_valores = "INSERT INTO `test`(`NICK`, `CEDULA`, `NOMBRE`, `GENERO`, `EDAD`, `TIEMPO_ENFERMEDAD`, `FECHA`)
VALUES ('$nick','$cedula','$nombre','$genero',$edad,'$tiempo_enfermedad','$fecha')";

		
$retry_value = $db_connection->query($insertar_valores);
$array = array();

   if ($retry_value) {

       $array = array(
        "resp" => "true"
        
        );
           
       //lo que se envia de respuesta al ajax de javascript
  
   }else 
   {
        $array = array(
            "resp" => "false");
    }    

   echo $json_response = json_encode($array);



?>