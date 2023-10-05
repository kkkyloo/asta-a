<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$sel = $_POST['sel'];
$token = "5852197115:AAE-sewlbP2TZHOqMTrShrqPpaJLwc64HoM";
$chat_id = "-963346015";
$arr = array(
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