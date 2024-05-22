require("dotenv").config();
const telegramConfig = require("./config/telegram");
const Bot = require("./bot");
const TelegramBot = require("node-telegram-bot-api");

const bot = new Bot(new TelegramBot(telegramConfig.token, {polling: true}))
bot.execute()