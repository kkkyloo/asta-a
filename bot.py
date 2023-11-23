import telebot, os
from telebot import types
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

bot = telebot.TeleBot(os.getenv('tg_bot_token'))
admin_chat_id = (os.getenv('chat_token'))

WAITING_FOR_NAME, WAITING_FOR_CONTACT_METHOD, WAITING_FOR_TELEGRAM, WAITING_FOR_PHONE, WAITING_FOR_MESSAGE = range(5)

user_data = {}
user_data.clear()

@bot.message_handler(commands=['start'])
def start(message):
    user_data.clear()
    bot.send_message(message.chat.id, "Здравствуйте, я бот АСТА-АВТО. Напишите, как к вам обращаться")
    bot.register_next_step_handler(message, get_name)


def get_name(message):
    user_data['name'] = message.text
    user_data['id'] = message.from_user.id
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton("Написать в телеграме", callback_data='telegram'),
               types.InlineKeyboardButton("Позвонить по номеру", callback_data='phone'))
    bot.send_message(message.chat.id, f"{user_data['name']}, выберите способ связи на кнопках:", reply_markup=markup)

@bot.callback_query_handler(func=lambda call: True)
def callback_handler(call):
    if call.data == 'telegram':
        user_data['contact_method'] = 'Написать в телеграме'
        bot.send_message(call.message.chat.id, "Хорошо! Введите ваш номер телефона в формате '+7XXXXXXXXXX'")
        bot.register_next_step_handler(call.message, get_phone_number)
    elif call.data == 'phone':
        user_data['contact_method'] = 'Позвонить по номеру'
        bot.send_message(call.message.chat.id, "Хорошо! Введите ваш номер телефона в формате '+7XXXXXXXXXX'")
        bot.register_next_step_handler(call.message, get_phone_number)
    elif call.data == 'send_again':
        bot.send_message(call.message.chat.id, "Здравствуйте, я бот АСТА-АВТО. Напишите, как к вам обращаться")
        bot.register_next_step_handler(call.message, get_name)
    elif call.data == 'change_phone':
        user_data['phone'] = "0"
        bot.send_message(call.message.chat.id, "Введите новый номер телефона:")
        bot.register_next_step_handler(call.message, get_phone_number)

# def get_telegram_message(message):
#     user_data['message'] = message.text
#     send_data(message.chat.id, message.from_user.first_name)

def get_phone_number(message):
    user_data['phone'] = message.text
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton("Изменить номер", callback_data='change_phone'))
    bot.send_message(message.chat.id, "Теперь напишите сообщение для наших менеджеров или выберите действие на кнопке", reply_markup=markup)
    bot.register_next_step_handler(message, get_phone_message)

def get_phone_message(message):
    if(user_data['phone'] != "0"):
        user_data['message'] = message.text
        send_data(message.chat.id, message.from_user.first_name)

def send_data(chat_id, user_name):
    user_link = f'<a href="tg://user?id={user_data["id"]}">{user_name}</a>'
    phone_link = f'<a href="https://t.me/{user_data["phone"]}">{user_data["phone"]}</a>'

    markup = types.InlineKeyboardMarkup()

    bot.send_message(admin_chat_id, 
                    f"Сообщение из телеграм бота: \n"
                    f"\n"
                    f"Введенное имя: {user_data['name']}\n"
                    f"Ссылка на телеграм (нажимаемая, если пользователь не ограничил это): {user_link}\n"
                    f"Ссылка на номер (нажимаемая, если пользователь не ограничил это): {phone_link}\n"
                    f"Способ связи: {user_data['contact_method']}\n"
                    f"Телефон (добавить в контакты и написать/позвонить клиенту, если номер выше не нажимается): {user_data.get('phone', 'Не указан')}\n"
                    f"Сообщение: {user_data.get('message', 'Не указано')}",
                    reply_markup=markup,
                    parse_mode='HTML')

    user_data['contact_method'] = ""
    markup = types.InlineKeyboardMarkup()
    markup.add(types.InlineKeyboardButton("Отправить еще", callback_data='send_again'))
    bot.send_message(chat_id, "Сообщение отправлено. Наши менеджеры свяжутся с вами в кратчайшие сроки!", reply_markup=markup)

if __name__ == "__main__":
    bot.polling(none_stop=True)