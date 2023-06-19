import axios from "axios";

export interface IData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
}

export const sendMessageTelegram = async (data: IData) => {
  const TOKEN = "6271411253:AAHSW62FL43xu4Jz73Q55LGptF2JiAFCFmQ";
  const CHAT_ID = "-1001855472262";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let message = `<b>Новая заявка</b>\n`;
  message += `<b>Имя: ${data.firstName}</b>\n`;
  message += `<b>Фамилия: ${data.lastName}</b>\n`;
  message += `<b>email: ${data.email}</b>\n`;
  message += `<b>Телефон: ${data.phone}</b>\n`;
  if (data.message) {
    message += `<b>Сообщение: ${data.message}</b>`;
  }

  await axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
};