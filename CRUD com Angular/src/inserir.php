<?php
	include "conectar.php";
?>
<?php

	$dados_form = file_get_contents("php://input");
    $obj = json_decode($dados_form);

	$nome = $obj->nome; 
 	$email = $obj->email; 
    $telefone = $obj->telefone;
	$senha = $obj->senha;
    $instrucao = 'INSERT into "Cliente"(nome,email,telefone,senha) values('."'".$nome."','".$email."',".$telefone.",'".$senha."')";
	pg_query($conect,$instrucao) or die(pg_last_error($conect));
	?> <?php 
	pg_close($conect);
?>