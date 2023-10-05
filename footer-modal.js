document.write('\
<div class="contact-modal">\
<div class="modal fade " id="contact_modal" tabindex="-1" aria-labelledby="contact-modalLabel" aria-hidden="true">\
  <div class="modal-dialog modal-xl modal-fullscreen-lg-down modal-dialog-scrollable modal-dialog-centered">\
    <div class="modal-content">\
      <div class="modal-header">\
        <h1 class="modal-title fs-5 title-cars" id="contact_modal">Связаться с нами</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
      </div>\
      <div class="modal-body justify-content-center text-center">\
      <div class="row text-center justify-content-center">\
        <div class="col mb-3" style="font-size: 15px;">Наш бот в телеграме для связи:<br><a href=""><img src="images/tg.png" style="height: 7vh; "></a></div>\
        <div class="col mb-3" style="font-size: 15px;">Наши номера:<br><a class="under" href="tel:+78632002222" style="color:black;">+7 863-200-22-22</a><br><br><a class="under" style="color:black; href="tel:+78005000591">+7 800-500-05-91</a></div>\
        </div>\
        <div class="text-center p-2" style="font-size: 13px;">ИЛИ</div>\
        <div class="text-center p-2" style="font-size: 18px;">Форма для отправки сообщения:</div>\
        <form action="telegram.php" method="POST">\
        <div class="row text-center justify-content-center">\
          <div class="col-5 col-sm-12  form-group">\
            <label for="exampleInputEmail1" class="form-label"  style="font-size: 15px;">Как к вам обращаться?</label>\
            <input type="text" name="name" class="form-control" id="" id="validationCustom01" value="" required>\
          </div>\
          <div class="col-7 col-sm-12 form-group">\
            <label for="exampleInputPassword1"  class="form-label"  style="font-size: 15px;">Номер телефона для связи с вами</label>\
            <input type="text" name="phone" id="" class="form-control" data-tel-input placeholder="" maxlength="18" required/>\
          </div>\
          </div>\
          <div class="mb-3 form-group">\
            <label for="exampleFormControlTextarea1" class="form-label"  style="font-size: 15px;">Ваше сообщение</label>\
            <textarea class="form-control" name="message" id="" rows="2" required></textarea>\
          </div>\
          <div class="mb-3 form-group">\
            <label for="exampleFormControlTextarea1" class="form-label"  style="font-size: 15px;">Выбор способа связи с вами</label>\
            <select style="font-size: 15px;" name="sel" class="form-select" id="">\
              <option value="1">Позвонить по номеру телефона</option>\
              <option value="2">Написать в WhatsApp</option>\
              <option value="3">Написать в Telegram</option>\
            </select>\
        </div>\
      </div>\
      <div class="modal-footer"><button type="submit" class="btn btn-dark">Отправить</button></form><button type="button" class="btn btn-dark" data-bs-target="#modal" data-bs-toggle="modal">Закрыть окно</button></div>\
    </div>\
  </div></div></div></div>\
<div class="container footer">\
<footer class="py-3 my-4">\
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">\
    <li class="nav-item"><a class="nav-link px-2 no-dur img-fluid" href=/#bmw_modal data-bs-target=#bmw_modal data-bs-toggle=modal onclick=openModal()>Дооснащение</a></li>\
    <li class="nav-item"><a class="nav-link px-2 no-dur img-fluid" href="https://chip-asta-auto.ru/">Чип-тюнинг</a></li>\
    <li class="nav-item"><a class="nav-link px-2 no-dur img-fluid" href="malar.html">Малярно-кузовной цех</a></li>\
    <li class="nav-item"><a class="nav-link px-2 no-dur img-fluid" href="/servis">Сервисный центр BMW</a></li>\
    <li class="nav-item"><a href=/#contact_modal data-bs-target=#contact_modal data-bs-toggle=modal onclick=openModal() class="nav-link px-2 no-dur img-fluid">Связаться с нами</a></li>\
    <li class="nav-item"><a href="#contacts" class="nav-link px-2 no-dur img-fluid">Контакты</a></li>\
  </ul>\
  <p class="text-center no-dur"><a href="https://www.asta-auto.ru/" class="text-center no-dur img-fluid">© 2004 - <script>new Date().getFullYear()>2010&&document.write(new Date().getFullYear());</script><br>АСТА-АВТО</a></p>\
</footer>\
</div>\
');