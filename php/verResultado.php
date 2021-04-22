
<?php

//Conexion con la base de datos

require_once ("conexion.php");

$idtest = $_GET['idtest'];

$sql= "SELECT * FROM `resultados` WHERE `ID_TEST` = $idtest";

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