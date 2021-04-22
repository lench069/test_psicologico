
<?php

//Conexion con la base de datos

require_once ("conexion.php");



$sql= "SELECT * FROM test ORDER by `ID_TEST` DESC LIMIT 1";

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