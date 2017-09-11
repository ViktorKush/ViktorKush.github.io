<?
$kuda='vkushniruk1@gmail.com';//куда отправлять почту?
$zagolovok='сообщение с сайта';
$headers='Content-type: text; charset="utf-8"';

if (isset($_POST['ok'])){
	//если существует переменная, значит начнем получать информацию из формы
	$fio=$_POST['fio'];
	$email=$_POST['email'];
	$tel=$_POST['tel'];
	$text=$_POST['text'];
	$subject=$_POST['subject'];

	if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
strtolower($email)));

	$messages=$text."\n".$email."\n".$tel."\n".$fio."\n".$subject;

	if (mail($kuda,$zagolovok,$messages,$headers)){echo "Ваше сообщение доставлено.";}
	
	}


?>