<?php
	include "conectar.php";
?>
<?php
    $dados_form = file_get_contents("php://input");
    $obj = json_decode($dados_form);
		
	$id = $obj->id;	
	$nome = $obj->nome;
	$email = $obj->email;
    $telefone = $obj->telefone;
    $senha = md5($obj->senha);
	
    $instrucao = 'UPDATE "Cliente" SET  nome='."'".$nome."', email='".$email."', telefone='".$telefone."', senha='".$senha."' WHERE id=".$id;
		pg_query($conect,$instrucao) or die(pg_last_error($conect));
		pg_close($conect);
?>