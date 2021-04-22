
<?php

//Conexion con la base de datos

require_once ("conexion.php");

$PD = $_GET['pd'];
$COD = $_GET['cod'];
$GENERO = $_GET['genero'];



if($GENERO == 'M')
{
	$sql= "SELECT `$COD` FROM `pre_hombre` WHERE `PD` = $PD ";
}else{
	$sql= "SELECT `$COD` FROM `pre_mujer` WHERE `PD` = $PD ";
}


$result = $db_connection->query($sql);

 $arr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = mysqli_fetch_assoc($result)) {
		$arr[] = $row; //cargo los valores en un array
		
	}
}

echo $json_response = json_encode($arr);
$db_connection->close();



?>