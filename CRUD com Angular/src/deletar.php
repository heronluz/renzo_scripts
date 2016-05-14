<?php
	include "conectar.php";
?>
<?php

	$dados_table = file_get_contents("php://input");
    $obj = json_decode($dados_table);
	
	$id = $obj->id;
	$sql = 'DELETE from "Cliente" where id='.$id;  
	$sql_query = pg_query($conect,$sql) or die(pg_last_error($conect));
	pg_close($conect); 
?>
