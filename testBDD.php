<?php
//phpinfo();
try
{
//connection à la base
//PDO : classe PHP pour gérer une base de données

	$bdd=new PDO('mysql:host=localhost;dbname=stock','root','')	;
	echo "bdd OK ! <br/>";
}
catch(Exepection $e)
{
	die('Erreur :'.$e->getMessage());
}




?>