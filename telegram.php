<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$sel = $_POST['sel'];

$config = include('config.php');

$token = $config['token'];
$chat_id = $config['chat_id'];

if($sel == 1){
  $sel = "Позвонить по номеру телефона";
}
elseif ($sel == 2){
  $sel = "Написать в WhatsApp";
}
elseif ($sel == 3){
  $sel = "Написать в Telegram";
}

$arr = array(
  'Заявка с сайта' => '',
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение' => $message,
  'Способ свзяи:' => $sel
);

foreach ($arr as $key => $value) {
  if ($key == 'Телефон: ') {
    $value = urlencode($value);
  }
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>
