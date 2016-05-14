<?php
	include "conectar.php";
?>
<?php
    $instrucao = 'select * from "Cliente"';
	$resu = pg_query($conect,$instrucao) or die(pg_last_error($conect));
	$obj = array();
    if($resu){
		while($row = pg_fetch_array($resu) ){
			array_push($obj, array(
			
				"id"=>$row["id"],	
				"nome"=>$row["nome"],
		        "email"=>$row["email"],
		        "telefone"=>$row["telefone"]));
		}
	}
	pg_close($conect);  
	echo json_encode($obj);
?>