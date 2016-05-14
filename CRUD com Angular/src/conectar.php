<?php

	$conect = pg_connect("host=localhost dbname=clienteSite port=5432 user=postgres password=heron123");
	if(!$conect)die("<h1>Falha ao conectar no banco");
 ?>