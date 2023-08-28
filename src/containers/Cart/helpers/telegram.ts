import axios from "axios";
import { IData } from "types/IData";


export const sendMessageTelegram = async (data: IData) => {
  const TOKEN = "6336810146:AAGwxsFvnevVSOXNzZv1cu_E8KdIqw2QSCU";
  const CHAT_ID = "-1001902457197";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let message = `<b>Новая заявка</b>\n`;
  message += `<b>Имя: ${data.name}</b>\n`;
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