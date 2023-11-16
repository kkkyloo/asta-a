<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$sel = $_POST['sel'];
$token = "";
$chat_id = "";
$arr = array(
  'Заявка с сайта' => '',
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение' => $message,
  'Способ свзяи:' => $sel
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>
