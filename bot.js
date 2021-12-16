//Подключаем библиотеку для работы с Телеграм ботом в js
const { Telegraf } = require('telegraf');
//Подключаем библиотеку для работы с http js
const axios = require('axios');
//Подключаем модуль Node.JS util.inspect() для красивого вывода
const util = require('util');
//Создаем бота Телеграм
const bot = new Telegraf('1969345963:AAHjpRXWtxGg-RABoNrpAXlBD5f48L73HN8');
//При команде /start отвечает 'Hello'
// bot.start((ctx) => ctx.reply('Hello'));

//[familiesNumber]={ operator: 'EQUAL', number: 2 }

//Post запрос
axios.post('https://dom.gosuslugi.ru/tariff/api/rest/services/public-standards/search', {
    allOktmoLevels: false,
    elementsPerPage: 10,
    fetchAnnulled: false,
    kinds: [
      "COST"
    ],
    oktmoCodes: [
      "95701000"
    ],
    pageIndex: 1,
    tariffEntityType: "public_standarts",
    types: ["REGIONAL", "MUNICIPAL"],
  })
  // выполнено
  .then(function (response) {
    // console.log(util.inspect(response.data, null, 3));
    console.log(util.inspect(response.data.items.filter(item => item.familiesNumber.number === 5), null, 2));
    // bot.start((ctx) => ctx.reply(util.inspect(response.data.items[0], null, 4)));
  })
  // отклонено
  .catch(function (error) {
    console.log(error);
  });
//Запуск бота
bot.launch();
