<meta http-equiv='refresh' content='3; url=https://veinattt.github.io/dss-landing/'>
<meta charset="UTF-8" />
<?php

	if (isset($_POST['username']) && $_POST['username'] != "")//если существует атрибут NAME и он не пустой то создаем переменную для отправки сообщения
		$name = $_POST['username'];
	else die ("Не заполнено поле \"Имя\"");//если же атрибут пустой или не существует то завершаем выполнение скрипта и выдаем ошибку пользователю.

	if (isset($_POST['mail']) && $_POST['mail'] != "") //тут все точно так же как и в предыдушем случае
		$email = $_POST['mail'];
	else die ("Не заполнено поле \"Email\"");
	 


	$address = "denmuraviov20@gmail.com";//адрес куда будет отсылаться сообщение для администратора
	$mes  = "Имя: $name \n";	//в этих строчках мы заполняем текст сообщения. С помощью опрератора .= мы просто дополняем текст в переменную
	$mes .= "E-mail: $mail \n";
	$send = mail ($address,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");//собственно сам вызов функции отправки сообшения на сервере

	if ($send) //проверяем, отправилось ли сообщение
		echo "Сообщение отправлено успешно! Перейти на <a href='https://veinattt.github.io/dss-landing/'>veinattt.github.io/dss-landing</a>, если вас не перенаправило вручную.";
	else 
		echo "Ошибка, сообщение не отправлено! Возможно, проблемы на сервере";
		 
?>