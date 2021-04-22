<?php

//Conexion con la base de datos

require_once ("conexion.php");
$id_test = $_GET['id_test'];
$codigo_prev = $_GET['codigo_prev'];
$descripcion = $_GET['descripcion'];
$bruto = $_GET['bruto'];
$br = $_GET['br'];





$insertar_valores = "INSERT INTO `resultados`( `id_test`, `cod`, `descripcion`, 
`bruto`, `br`) VALUES ($id_test,'$codigo_prev','$descripcion' ,$bruto ,$br)";

		
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