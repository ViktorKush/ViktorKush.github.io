<?
$kuda='vkushniruk1@gmail.com';//куда отправлять почту?
$zagolovok='сообщение с сайта'; 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://galian.od.ua/contact.html";  // На какую страничку переходит после отправки письма 
 
if (isset($_POST['ok'])){
	//если существует переменная, значит начнем получать информацию из формы
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$subject=$_POST['subject'];
	$message=$_POST['message'];
$message=" 
 
 
Имя: $name

Тема: $subject 
 
E-mail: $email

Телефон: $phone
 
Сообщение: $message
 
 
"; 
	$messages=$message."\n".$date."\n".$time;

	mail($kuda,$zagolovok,$messages);
	print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 1000); 
//--></script> 
 
$msg 
 
<p>Спасибо за Ваш отзыв. Подождите, сейчас вы будете перенаправлены на страницу контактов.</p>";  
exit; 
	
	}


?>