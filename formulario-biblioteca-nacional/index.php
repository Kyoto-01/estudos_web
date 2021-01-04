<!DOCTYPE html>
<html lang="pt-BR">
	<head>
		<!--meta tags-->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!--Fim das meta tags-->
		<!--Estilização da página-->
		<style>
			h1{
				text-align: center;
			}
			p, h1{
				color: blue;
			}
		</style>
		<!--Fim da estilização da página-->
	</head>
	<body>
		<h1>SUAS INFORMAÇÕES</h1>
		<hr>
		<?php
			$nome = htmlspecialchars($_POST['nome']);
			$sobrenome = htmlspecialchars($_POST['sobrenome']);
			$idade = htmlspecialchars($_POST['idade']);
			$sexo = htmlspecialchars($_POST['sexo']);
			$cpf = htmlspecialchars($_POST['cpf']);
			$email = htmlspecialchars($_POST['email']);
			$senha = htmlspecialchars($_POST['senha']);
			$termos_aceitos = isset($_POST['aceitar-termos']);
			
			echo "<p>Nome: {$nome}</p>\n";
			echo "<p>Sobrenome: {$sobrenome}</p>\n";
			echo "<p>Idade: {$idade}</p>\n";
			echo "<p>Sexo: {$sexo}</p>\n";
			echo "<p>CPF: {$cpf}</p>\n";
			echo "<p>E-mail: {$email}</p>\n";
			echo "<p>Senha: {$senha}</p>\n";
			echo "<p>Termos aceitos: ", $termos_aceitos ? 'Sim' : 'Não', "</p>\n";
		?>
	</body>
</html>