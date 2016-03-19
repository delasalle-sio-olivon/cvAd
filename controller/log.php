<?php
session_start();

if(isset($_POST['login'])){
	echo 'Ouè ';
	if(sha1($_POST['login'])=='2736fab291f04e69b62d490c3c09361f5b82461a'){
		if (sha1($_POST['mdp'])=='8f2f45d5053ec1622757060cd57d2bda1701c04c') {
			$_SESSION["logged"]=true;
			echo 'ok';
		}
	}
	
}
?>
<form action="#" method="POST">
<input type="text" name="login"/>
<input type="password" name="mdp"/>
<input type="submit"/>
</form>