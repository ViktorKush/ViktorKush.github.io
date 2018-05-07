<?php
header("Content-type: text/html; charset=utf-8");
//**********************************************

$to = "admin@superwork.com.ua";//Ваш e-mail адрес

if(empty($_POST['js'])){

$log =="";
$error="no"; //флаг наличия ошибки

        if (!empty($_POST['posName'])){
		$posName = addslashes($_POST['posName']);
		$posName = htmlspecialchars($posName);
		$posName = stripslashes($posName);
		$posName = trim($posName);
        }
        if (!empty($_POST['posCompany'])){
		$posCompany = addslashes($_POST['posCompany']);
		$posCompany = htmlspecialchars($posCompany);
		$posCompany = stripslashes($posCompany);
		$posCompany = trim($posCompany);
        }
        if (!empty($_POST['posPhone'])){
		$posPhone = addslashes($_POST['posPhone']);
		$posPhone = htmlspecialchars($posPhone);
		$posPhone = stripslashes($posPhone);
		$posPhone = trim($posPhone);
        }
        if (!empty($_POST['posText'])){
		$posText = addslashes($_POST['posText']);
		$posText = htmlspecialchars($posText);
		$posText = stripslashes($posText);
		$posText = trim($posText);
        }

		$fromURL = addslashes($_POST['fromURL']);
		$URL = addslashes($_POST['URL']);
        $IP = addslashes($_POST['IP']);
		$FORM = addslashes($_POST['FORM']);

if ($FORM=='1'){
    //Проверка правильность имени
        if(!$posName || strlen($posName)>40 || strlen($posName)<3) {
        $log.="<li>Не верное имя!</li>"; $error="yes"; }

    //Проверка Phone
    if($posPhone == ''){
    	$log .= "<li>Введите телефон!</li>";
    	$error = "yes";
    }

    //Проверка наличия введенного текста комментария
    if (empty($posText)){
    	$log .= "<li>Введите сообщение!</li>";
    	$error = "yes";
    }
    //Проверка длины текста комментария
    if(strlen($posText)>1010)
    {
    	$log .= "<li>Текст максимально 1000 символов!</li>";
    	$error = "yes";
    }
    //Проверка на наличие длинных слов
    $mas = preg_split("/[\s]+/",$posText);
    foreach($mas as $index => $val)
    {
      if (strlen($val)>60)
      {
    	$log .= "<li>Очень длинные слова (больше 60 символов) в тексте записи!</li>";
    	$error = "yes";
    	break;
      }
    }
}

if ($FORM=='2'){
    //Проверка правильность имени
        if(!$posName || strlen($posName)>40 || strlen($posName)<3) {
        $log.="<li>Не верное имя!</li>"; $error="yes"; }

    

    //Проверка Phone
    if($posPhone == ''){
    	$log .= "<li>Введите телефон!</li>";
    	$error = "yes";
    }
}


sleep(1);

//Если нет ошибок отправляем email
if($error=="no")
{
//Отправка письма админу о новом комментарии
//$to = $mailto;//Ваш e-mail адрес

if($FORM=="1"){$messig="Заявка с сайта";}
if($FORM=="2"){$messig="Заявка на вакансию";}

if($FORM=="1"){
$mes = "$messig ".$_SERVER['SERVER_NAME']." \n\nИмя: $posName \n\nEmail: $posEmail \n\nТелефон : $posPhone \n\nСообщение : $posText \n\nIP : $IP \nURL : $URL" ;}
if($FORM=="2"){
$mes = "$messig ".$_SERVER['SERVER_NAME']." \n\nИмя: $posName \n\nEmail: $posEmail \n\nТелефон : $posPhone \n\nIP : $IP \nURL : $URL" ;}

//$from = $posEmail;
$from = 'no-reply@'.$_SERVER['SERVER_NAME'];
if($FORM=="1"){
$sub = '=?utf-8?B?'.base64_encode('Заявка с сайта').'?=';
$headers = "From: ".$_SERVER['SERVER_NAME']." <".$from.">\r\n";
}
if($FORM=="2"){
$sub = '=?utf-8?B?'.base64_encode('Заявка на вакансию').'?=';
$headers = "From: ".$_SERVER['SERVER_NAME']." <".$from.">\r\n";
}
$headers .= 'MIME-Version: 1.0';
$headers .= 'Content-type: text/plain; charset=utf-8';
mail($to, $sub, $mes, $headers);

echo "2";

 //Всё Ok!
}
else//если ошибки есть
{
		echo "<p style='font: 13px Verdana;'><font color=#FF3333><strong>Ошибка !</strong></font></p><ul style='list-style: none; font: 14px Verdana; color:#000; border:1px solid #c00; border-radius:5px; -moz-border-radius:5px; -webkit-border-radius:5px; background-color:#fff; padding:10px; margin:5px 10px;'>".$log."</ul><br />"; //Нельзя отправлять пустые сообщения
}
}